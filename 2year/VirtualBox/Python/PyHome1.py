# import math
#
#
# def main(x=[], z=[]):
#     s = 0
#     n = len(x)
#     for i in range(1, n + 1):
#         s += 59 * (
#             (z[n + 1 - i - 1]) ** 3 +
#             (x[math.ceil(i / 4) - 1]) ** 2 +
#             x[n + 1 - math.ceil(i / 3) - 1])
#     return s * 52

# V1
# def main(n):
#     return .86 if n == 0 else (
#         main(n - 1) + (main(n - 1) ** 2) / 11 + 1 if n >= 1 else ()
#     )


# V2
# def main(n):
#     if n == 0:
#         return .86
#     elif n >= 1:
#         return main(n - 1) + (main(n - 1) ** 2) / 11 + 1
#     else:
#         return None


# def main(m, b, n, z):
#     s = 0
#     for j in range(1, n + 1):
#         for c in range(1, b + 1):
#             mult = 1
#             for k in range(1, m + 1):
#                 mult *= 64 * k**6 - (c**4)/55 - 83 * (94 * j**3 - 9 * z)**2
#                 print(s)
#             s += mult
#     return s


# def main(b, m):
#     s = 0
#     for k in range(1, m + 1):
#         for c in range(1, b + 1):
#             s += ((54 * c) ** 6) / 10 - (
#                 14 * (72 * c ** 2 - 19 * k) ** 3
#             )
#     return s

# V1
# def main(x):
#     return (abs(x) ** 6 - 61 * x - 17) if (x < 72) else (
#         76 * x ** 12 if 72 <= x < 138 else (
#             17 * (71 + 27 * x ** 3) ** 2 - (
#                 math.cos((x ** 2) / 16)) ** 6 - (21 + x ** 2)
#         )
#     )


# V2
# def main(x):
#     if x < 72:
#         return abs(x) ** 6 - 61 * x - 17
#     elif 72 <= x < 138:
#         return 76 * x ** 12
#     else:
#         return 17 * (71 + 27 * x ** 3) ** 2 - (
#             math.cos((x ** 2) / 16)) ** 6 - (21 + x ** 2)


# def main(y, z):
#     return 33 * z**6 - (1 + z**2 + 87*y)**2 + (
#         math.log((y**2 + z**3 + 1), 10)**5 -
#         ((55 - 15 * z**2)**6)/22) / (
#             ((y**3 - y**2 - 34 * z)**7)/77 - z**18)


dict1 = {
    'v1': 1,
    'v2': 2,
    'v3': 3,
    'v4': 4,
}

print(dict1)
