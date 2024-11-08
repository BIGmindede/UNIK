import requests
import warnings

warnings.filterwarnings('ignore')
inputted = ""
outs = []

def findPackages(package_name, i, depth):
    if i < depth:
        package_json = requests.get('https://pypi.org/pypi/{0}/json'.format(package_name), verify=False).json()
        packages = package_json['info']['requires_dist']
        if packages:
            ins = []
            for package in packages:
                #print(package)
                if package not in outs:
                    outs.append(package)
                    for c in package:
                        if c == ' ' or c == '[' or c == '<' or c == '>' or c == '=' or c == ';' or c == '~' or c == '!':
                            package = package.split(c)[0]
                    if package not in ins:
                        ins.append(package)
                        print('"' + package_name + '" -> "' + package + '"')
                        findPackages(str(package), i + 1, depth)

while inputted != "exit":
    print('- Type package name to show or type "exit" to end the programm: ', end='')
    inputted = str(input())

    if inputted == "exit":
        print("- Programm finished -")
        break

    print("- Enter the deep: ", end='')
    deep = int(input())

    print("digraph G{")
    findPackages(inputted, 1, deep)
    print("}")
