def make_list(length, value=0, result=[]):
    for i in range(length):
        result.append(value)
    return result


def make_matrix(size, value=0):
    if isinstance(size, int):
        size = (size, size)
    return [[value] * size[0] for i in range(size[1])]


def gcd(*numbers):
    def _gcd(a, b):
        if b == 0:
            return a
        return _gcd(b, a % b)

    result = numbers[0]
    for i in range(1, len(numbers)):
        result = _gcd(result, numbers[i])
    return result


def month(num, language="ru"):
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


def to_string(*args, sep=" ", end="\n"):
    return sep.join([str(arg) for arg in args]) + end


result = []


in_stock = {"coffee": 1, "milk": 2, "cream": 3}


def order(*preferences):
    temp = "К сожалению, не можем предложить Вам напиток"
    for coffee in preferences:
        if coffee not in result or any([c in result for c in preferences]):
            if coffee == "Эспрессо" and in_stock["coffee"] > 0:
                in_stock["coffee"] -= 1
                result.append(coffee)
                temp = coffee
                break
            elif coffee == "Капучино" and in_stock['coffee'] > 0 and in_stock['milk'] > 2:
                in_stock['coffee'] -= 1
                in_stock['milk'] -= 3
                result.append(coffee)
                temp = coffee
                break
            elif coffee == "Макиато" and in_stock["coffee"] > 1 and in_stock["milk"] > 0:
                in_stock["coffee"] -= 2
                in_stock["milk"] -= 1
                result.append(coffee)
                temp = coffee
                break
            elif coffee == "Кофе по-венски" and in_stock["coffee"] > 0 and in_stock["cream"] > 1:
                in_stock["coffee"] -= 1
                in_stock["cream"] -= 2
                result.append(coffee)
                temp = coffee
                break
            elif coffee == "Латте Макиато" and in_stock["coffee"] > 0 and in_stock["milk"] > 1:
                if in_stock["cream"] > 0:
                    in_stock["coffee"] -= 1
                    in_stock["milk"] -= 2
                    in_stock["cream"] -= 1
                    result.append(coffee)
                    temp = coffee
                    break
            elif coffee == "Кон Панна" and in_stock["coffee"] > 0 and in_stock["cream"] > 0:
                in_stock["coffee"] -= 1
                in_stock["cream"] -= 1
                result.append(coffee)
                temp = coffee
                break
    if len(result) == 6 or all([c in result for c in preferences]):
        result.clear()
    return temp


def enter_results(*args):
    data.extend(args)


data = []


def get_sum():
    return round(sum(data[::2]), 2), round(sum(data[1::2]), 2)


def get_average():
    return round(sum(data[::2])/len(data[::2]), 2), round(sum(data[1::2])/len(data[1::2]), 2)


lambda s: (len(s), s.casefold())


string = 'Яндекс использует Python во многих проектах'
print(sorted(string.split(), key=lambda s: (len(s), s.casefold())))


lambda x: not x if sum(map(int, str(x))) % 2 else x


print(*filter(lambda x: not sum(map(int, str(x))) % 2, (32, 64, 128, 256, 512)))


def secret_replace(text, **rules):
    keys_replaced = {}
    for key in rules.keys():
        keys_replaced[key] = 0
    i = 0
    temp_len = len(text)
    while i != temp_len:
        if text[i] in rules:
            old_char = text[i]
            if old_char not in keys_replaced:
                keys_replaced[old_char] = 0
            text = text[:i] + rules[old_char][keys_replaced[old_char]] + text[i + 1:]
            keys_replaced[old_char] += 1
            if keys_replaced[old_char] == len(rules[old_char]):
                keys_replaced[old_char] = 0
        i += 1
        temp_len = len(text)
    return text


# def main():