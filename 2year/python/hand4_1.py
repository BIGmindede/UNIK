def print_hello(name):
    print(f"Hello, {name}!")

def gcd(n1, n2):
    return


def gcd(n1, n2):
    tmp = n1 if n1 > n2 else n2
    for i in range(1, tmp + 1):
        if (n1 % i == 0) and (n2 % i == 0):
            res = i
    return res


def number_length(num):
    num = num * -1 if num < 0 else num
    return len(str(num))


def month(num, language):
    months_ru = {"1": "Январь", "2": "Февраль", "3": "Март", "4": "Апрель", "5": "Май",
                 "6": "Июнь", "7": "Июль", "8": "Август", "9": "Сентябрь", "10": "Октябрь",
                 "11": "Ноябрь", "12": "Декабрь"}
    months_eng = {"1": "January", "2": "February", "3": "March", "4": "April", "5": "May",
                  "6": "June", "7": "July", "8": "August", "9": "September", "10": "October",
                  "11": "November", "12": "December"}
    if language == "ru":
        return months_ru[str(num)]
    elif language == "en":
        return months_eng[str(num)]

def split_numbers(string):
    string = tuple(map(int, string.split()))
    return string


new_set = set()


def modern_print(string):
    if string not in new_set:
        print(string)
        new_set.add(string)


def can_eat(knight_pos, figure_pos):
    x1, y1 = knight_pos
    x2, y2 = figure_pos
    return abs(x1 - x2) == 2 and abs(y1 - y2) == 1 or abs(x1 - x2) == 1 and abs(y1 - y2) == 2


def is_palindrome(value):
    if isinstance(value, int):
        value = str(value)
    if isinstance(value, (str, tuple, list)):
        return value == value[::-1]
    else:
        return False


def is_prime(num):
    if num < 2:
        return False
    for i in range(2, int(num ** 0.5) + 1):
        if num % i == 0:
            return False
    return True


# def merge(tup1, tup2):
#     result = []
#     i = 0
#     j = 0
#     while i < len(tup1) and j < len(tup2):
#         if tup1[i] < tup2[i]:
#             result.append(tup1[i])
#             i += 1
#         else:
#             result.append(tup2[j])
#             j += 1
#     result.extend(tup1[i:])
#     result.extend(tup2[j:])
#     return tuple(result)


def merge(tup1, tup2):
    result = []
    i = 0
    j = 0
    while i < len(tup1) and j < len(tup2):
        if tup1[i] < tup2[j]:
            result.append(tup1[i])
            i += 1
        else:
            result.append(tup2[j])
            j += 1
    result.extend(tup1[i:])
    result.extend(tup2[j:])
    return tuple(result)

# def main():

