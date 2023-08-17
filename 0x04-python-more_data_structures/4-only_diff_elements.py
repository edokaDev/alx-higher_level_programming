#!/usr/bin/python3

def only_diff_elements(set_1, set_2):
    new_list = []
    for i in set_1:
        is_unique = True
        for j in set_2:
            if i == j:
                is_unique = False
        if is_unique:
            new_list.append(i)
    for j in set_2:
        is_unique = True
        for i in set_1:
            if j == i:
                is_unique = False
        if is_unique:
            new_list.append(j)
    return new_list
