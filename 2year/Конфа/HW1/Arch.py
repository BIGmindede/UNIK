import os
import calendar as cal

class Archive:
    def __init__(self, zip):
        self.zip = zip
        self.names = zip.namelist()
        self.this_dir = zip.namelist()[0]
        self.root_dir = zip.namelist()[0]
        self.this_data = {}
        self.files_paths = {}

        arch_data = zip.infolist()
        for data in arch_data:
            if (data.is_dir()):
                self.this_data[data.filename[:-1]] = data
            else:
                self.this_data[data.filename] = data

        for name in self.names:
            if name == self.this_dir:
                continue
            hierarchy = cut_path(name)
            self.files_paths[name] = hierarchy

    def get_data(self, commands):
        if len(commands) > 1:
            dir = self.this_dir
            if commands[1] != '-l':
                dir = self.clear_path(commands[1])
                catalog = self.all_items_in_dir(dir)
                print(*catalog, sep="\n", end='\n')
            elif commands[1] == '-l':
                if len(commands) > 2:
                    dir = self.clear_path(commands[2])
                catalog = self.all_items_in_dir(dir)
                for item in catalog:
                    path = os.path.join(dir, item)
                    try:
                        data = self.this_data[path]
                        d_t = data.date_time
                        clock = convert_clock(d_t)
                        print(cal.month_abbr[d_t[1]], " ", d_t[2], clock, "\t",
                              data.file_size, "\t", data.external_attr, "\t", item)
                    except Exception as ex:
                        print(ex)
        else:
            catalog = self.all_items_in_dir(self.this_dir)
            print(*catalog, sep='\n', end='\n')

    def clear_path(self, path):
        dir = ""
        path = self.format_path(path)
        if path[0] == '/' and path[1:] in self.names:
            dir = path[1:]
        elif path[0] != '/':
            dir = os.path.join(self.this_dir, path)
        else:
            raise ValueError(f"Access to: '{path}' failed: No such file or directory")
        return dir

    def format_path(self, path):
        if path[len(path) - 1] != '/' and not '.' in path:
            path += '/'
        return path

    def all_items_in_dir(self, dir):
        cur_path = cut_path(dir)
        end = len(cur_path)
        last = cur_path[end-1]
        items = set()
        for key in self.files_paths:
            choice = self.files_paths[key]
            if len(choice) > end:
                if choice[end-1] == last:
                    child = self.files_paths[key]
                    items.add(child[end])
        return items

    def change_directory(self, path):
        if path == "/":
            self.this_dir = self.root_dir
        elif path == "..":
            path = self.this_dir
            hierarchy = path.split("/")
            new_path = ""
            if len(hierarchy) == 2:
                new_path = self.root_dir
            else:
                for i in range(len(hierarchy)-2):
                    new_path += hierarchy[i] + '/'
            self.this_dir = new_path
        else:
            try:
                dir = self.clear_path(path)
                if (dir in self.names) and not "." in dir:
                    self.this_dir = dir
                else:
                    raise ValueError(f"Access to: '{dir}' failed: No such file or directory")
            except Exception as ex:
                print(ex)

    def catenate(self, path):
        try:
            if path == "":
                print(f"Access to: '{dir}' failed: No such file or directory")
                return
            dir = self.clear_path(path)
            if path[0:2] == "..":
                tmp_path = self.this_dir
                hierarchy = tmp_path.split("/")
                new_path = ""
                if len(hierarchy) == 2:
                    new_path = self.root_dir
                else:
                    for i in range(len(hierarchy)-2):
                        new_path += hierarchy[i] + '/'
                dir = new_path
                new_path = path.split("/")
                for i in range(1, len(new_path)):
                    dir += new_path[i] + "/"
                dir = dir[:-1]
        except Exception as ex:
            print(ex)
            return
        try:
            with self.zip.open(dir) as file:
                print(file.read())
        except Exception as ex:
            print(f"{dir} is not a file")

    def get_all_names(self):
        print(self.names)

    def get_all_data(self):
        for data in self.infolist():
            print(data)


def cut_path(path):
    hierarchy = path.split("/")
    if hierarchy[len(hierarchy)-1] == "":
        hierarchy.pop()
    return hierarchy

def convert_clock(d_t):
    hour = f"0{d_t[3]}" if d_t[3] < 10 else str(d_t[3])
    min = f"0{d_t[4]}" if d_t[4] < 10 else str(d_t[4])
    sec = f"0{d_t[5]}" if d_t[5] < 10 else str(d_t[5])
    return f"{hour}:{min}:{sec}"

