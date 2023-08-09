#!/usr/bin/python3

for i in range(0, 10):
    for k in range(i, 10):
        if i != k:
            if i == 8 and k == 9:
                print("{0}{1}".format(i, k))
            else:
                print("{0}{1}, ".format(i, k), end='')
