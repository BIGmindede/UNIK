def recursive_sum(*args):
    if len(args) == 0:
        return 0
    elif len(args) == 1:
        return args[0]
    else:
        return args[0] + recursive_sum(*args[1:])


def recursive_digit_sum(n):
    if n == 0:
        return 0
    else:
        return n % 10 + recursive_digit_sum(n // 10)


def make_equation(a, *ks):
    equation = str(a)
    for i, k in enumerate(ks):
        equation = f"({equation}) * x + {k}"
    return equation


def answer(fn):
    def wrapper(*args, **kwargs):
        result = fn(*args, **kwargs)
        return f'Результат функции: {result}'
    return wrapper


def result_accumulator(fn):
    def wrapper(*args, **kwargs):
        wrapper.results.append(fn(*args))
        if kwargs.get('method') == 'drop':
            res, wrapper.results = wrapper.results, []
            return res
    wrapper.results = []
    return wrapper


def merge_sort(arr):
    def merge(tuple1, tuple2):
        result = []
        i = 0
        j = 0
        while i < len(tuple1) and j < len(tuple2):
            if tuple1[i] < tuple2[j]:
                result.append(tuple1[i])
                i += 1
            else:
                result.append(tuple2[j])
                j += 1
        result.extend(tuple1[i:])
        result.extend(tuple2[j:])
        return result

    if len(arr) <= 1:
        return arr
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    return merge(left, right)


def same_type(fn):
    def wrapper(*args):
        types = set(map(type, args))
        if len(types) == 1:
            return fn(*args)
        else:
            return "Обнаружены различные типы данных\nFail"
    return wrapper


def fibonacci(n):
    if n == 0:
        return []
    elif n == 1:
        return [0]
    elif n == 2:
        return [0, 1]
    else:
        fib_seq = [0, 1]
        for i in range(2, n):
            fib_seq.append(fib_seq[i - 1] + fib_seq[i - 2])
        return fib_seq


def cycle(iterable):
    saved = []
    for element in iterable:
        yield element
        saved.append(element)
    while saved:
        for element in saved:
            yield element


def make_linear(args):
    result = []
    for i in args:
        if isinstance(i, list):
            result.extend(make_linear(i))
        else:
            result.append(i)
    return result



