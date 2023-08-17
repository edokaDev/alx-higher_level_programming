#!/usr/bin/python3

def common_elements(set_1, set_2):
    new_list = []
    for i in set_1:
        for k in set_2:
            if i == k:
                new_list.append(i)
    return new_list
