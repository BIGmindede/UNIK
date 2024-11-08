import os
import zlib
from os import listdir
from hashlib import sha1
import re
from graphviz import Source

mypath = 'C:/2year/Конфа/HW5/rep/.git/objects'
dirs = [f for f in listdir(mypath)]
path = [mypath + '/' + i + '/' + f for i in dirs for f in listdir(mypath + '/' + i)]
hashes = []
hash_words = []

for f in path:
    compressed_contents = open(f, 'rb').read()
    decompressed_contents = zlib.decompress(compressed_contents)
    hash_value = sha1(decompressed_contents).hexdigest()
    hashes.append(hash_value)
    hash_words.append(decompressed_contents)

res = ""
junk = []
d = {}
versions = {}
for i in range(0, len(hashes)):
    d[hashes[i]] = hash_words[i]

def getCommit(k):
    global res
    global versions
    if not k in junk:
        words = d.get(k).split()
        htree = str(words[2])
        htree = htree[2:-1]
        w3 = str(words[3])
        w3 = w3[2:-1]
        commit_name = '_' + str(words[-1])[2:-1]
        if str(words[-2])[2:-1] != '+0300':
            commit_name = '_' + str(words[-2])[2:-1] + commit_name
        res += commit_name + ' -> _' + htree[:6] + ';\n'
        w = d.get(htree).split()
        files = ([re.split(r'\\', str(w[i]))[0] for i in range(2, len(w))])
        for f in files:
            if versions.__contains__(f):
                c = versions.get(f) + 1
                versions[f] = versions.get(f) + 1
            else:
                c = 1
                versions[f] = c
            res += '_' + htree[:6] + ' -> _' + str(f)[2:].replace('.', '_') + '_v' + str(c) + ';\n'
        if (w3 == 'parent'):
            hparent = str(words[4])
            hparent = hparent[2:-1]
            pwords = d.get(hparent).split()
            pcommit_name = '_' + str(pwords[-1])[2:-1]
            if str(pwords[-2])[2:-1] != '+0300':
                pcommit_name = '_' + str(pwords[-2])[2:-1] + pcommit_name
            res += pcommit_name + ' -> ' + commit_name + ';\n';


for k in d:
    words = d.get(k).split()
    s = str(words[0])
    s = s[2:-1]
    if s == 'commit':
        getCommit(k)
        junk.append(k)

res = "digraph G {\n" + res + "\n}"
f = open("commits" + ".dot", "w")
f.write(res)
f.close()
print(res)
path = 'commits.dot'
s = Source.from_file(path)
s.render('commits.gv', format='jpg')
