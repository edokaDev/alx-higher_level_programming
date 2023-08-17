#!/usr/bin/python3

def simple_delete(a_dictionary, key=""):
    key_s = list(a_dictionary)
    for i in key_s:
        if i == key:
            del a_dictionary[key]
    return a_dictionary
