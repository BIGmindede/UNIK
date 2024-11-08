import hashlib
import json
import os.path
import sys
from top_sort import top_sort

HISTORY = 'history_par.json'

class Block:
    def __init__(self, name):
        self.dependencies = []
        self.commands = []
        self.name = name


def translate(file):
    blocks = []
    block = None
    for line in file:
        line = str(line).replace('\n', '')
        if line != '' and not line.isspace() and line[0] != ' ' and line[0] != '\t':
            if block is not None:
                blocks.append(block)
            split_line = line.split()
            block_name = split_line[0].replace(':', '')
            block = Block(block_name)
            block.dependencies = split_line[1:]
        elif line != '' and not line.isspace():
            block.commands.append(line.lstrip())
    return blocks

def transfom_to_graph(nodes):
    graph = {}
    for sec in nodes:
        graph[sec.name] = sec
    return graph

def load_history(json_file):
    history = {}
    if os.path.exists(json_file):
        file = open(json_file, 'r+', encoding='utf-8')
        history = json.load(file)
    return history

def selectReqs(graph, history):
    required = []
    required_names = []
    for node in graph:
        isNeeded = False
        for child in node.dependencies:
            isNeeded |= child in required_names
            isNeeded |= compile_req(child, history)
        isNeeded &= compile_req(node.name, history)
        if isNeeded:
            required.append(node)
            required_names.append(node)
    return required

def compile_req(file_name, history_par):
    if not os.path.exists(file_name):
        return True
    hasher_inner = hashlib.md5()
    file_inner = open(file_name, 'rb').read()
    hasher_inner.update(file_inner)
    hash_inner = hasher_inner.hexdigest()

    if file_name in history_par:
        if hash_inner == history_par[file_name]:
            return False
        else:
            history_par.update({file_name: hash_inner})
            return True
    else:
        history_par.update({file_name: hash_inner})
        return True

def exec(graph_par):
    for node in graph_par:
        for command in node.commands:
            os.system(command)

if len(sys.argv) == 2:
    file = open(sys.argv[1]).readlines()
else:
    file = open("makefile.txt").readlines()
blocks = translate(file)
graph = transfom_to_graph(blocks)
sorted_graph = top_sort(graph)
history = load_history(HISTORY)
graph = selectReqs(sorted_graph, history)
exec(graph)

if history:
    if not os.path.exists(HISTORY):
        for block in graph:
            file_to_hash = block.name
            if os.path.exists(file_to_hash):
                hasher = hashlib.md5()
                f = open(file_to_hash, 'rb').read()
                hasher.update(f)
                hashcode = hasher.hexdigest()
                history.update({file_to_hash: hashcode})

    f = open(HISTORY, "w", encoding='utf-8')
    json.dump(history, f, ensure_ascii=False, indent=2)

print(history)
