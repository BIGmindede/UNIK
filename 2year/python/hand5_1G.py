from math import log, pow, cos, e, pi, sin

class Rectangle:
    def __init__(self, first_coord, sec_coord):
        self.first_coord = first_coord
        self.sec_coord = sec_coord
        self.width = abs(first_coord[0] - sec_coord[0])
        self.height = abs(first_coord[1] - sec_coord[1])
        self.center = ((first_coord[0] + sec_coord[0]) / 2, (first_coord[1] + sec_coord[1]) / 2)

    def perimeter(self):
        return round(2 * (self.width + self.height), 2)

    def area(self):
        return round(self.width * self.height, 2)

    def get_pos(self):
        if (self.first_coord[0] < self.center[0]):
            return (round(self.first_coord[0], 2), round(self.first_coord[1], 2))
        return (round(self.first_coord[0] - self.width, 2), round(self.first_coord[1], 2))

    def get_size(self):
        return (self.width, self.height)

    def move(self, dx, dy):
        self.first_coord = (self.first_coord[0] + dx, self.first_coord[1] + dy)
        self.sec_coord = (self.sec_coord[0] + dx, self.sec_coord[1] + dy)
        self.center = ((self.first_coord[0] + self.sec_coord[0]) / 2, (self.first_coord[1] + self.sec_coord[1]) / 2)

    def resize(self, new_width, new_height):
        self.width = new_width
        self.height = new_height

    def turn(self):
        if (self.first_coord[0] <= self.center[0]):
            self.first_coord = (
                self.center[0] - self.first_coord[1] - self.center[1],
                self.center[1] - self.first_coord[0] - self.center[0]
            )
            self.sec_coord = (
                self.center[0] - self.sec_coord[1] - self.center[1],
                self.center[1] - self.sec_coord[0] - self.center[0]
            )
        else:
            self.first_coord = (
                self.center[0] + self.first_coord[1] - self.center[1],
                self.center[1] + self.first_coord[0] - self.center[0]
            )
            self.sec_coord = (
                self.center[0] - self.sec_coord[1] - self.center[1],
                self.center[1] - self.sec_coord[0] - self.center[0]
            )
        tmp = self.width
        self.width = self.height
        self.height = tmp

    def scale(self, factor):
        self.width *= factor
        self.height *= factor
        self.first_coord = (
            round((self.first_coord[0] - self.center[0]) * factor + self.center[0], 2),
            round((self.first_coord[1] - self.center[1]) * factor + self.center[1], 2)
        )
        self.sec_coord = (
            round((self.sec_coord[0] - self.center[0]) * factor + self.center[0], 2),
            round((self.sec_coord[1] - self.center[1]) * factor + self.center[1], 2)
        )

def f(x):
    return log(pow(x, 3 / 16), 32) + pow(x, cos((pi * x) / (2 * e))) - sin(x / pi) ** 2

print(f(12.345))