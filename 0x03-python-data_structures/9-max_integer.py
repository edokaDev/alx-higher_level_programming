#!/usr/bin/python3

def max_integer(my_list=[]):
    length = len(my_list)
    if length == 0:
        return None
    else:
        max_int = my_list[0]
        for i in range(length):
            if my_list[i] > max_int:
                max_int = my_list[i]
        return max_int
