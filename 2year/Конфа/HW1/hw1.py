import zipfile
import Arch

def main():
    filename = "C:\\2year\Конфа\HW1\HW1.zip"
    with zipfile.ZipFile(filename) as zip:
        arch = Arch.Archive(zip)
        while True:
            print(f"{arch.this_dir}>")
            commands = input().split()
            if len(commands) < 1:
                continue
            elif commands[0] == "pwd":
                print(arch.this_dir)
            elif commands[0] == "ls":
                try:
                    arch.get_data(commands)
                except Exception as ex:
                    print(ex)
            elif commands[0] == "cd":
                try:
                    arch.change_directory(commands[1])
                except Exception as ex:
                    arch.change_directory("/" + arch.root_dir)
            elif commands[0] == "cat":
                try:
                    arch.catenate(commands[1])
                except Exception as ex:
                    print(ex)
            elif commands[0] == "exit()":
                break
            else:
                print("Command not found")
main()