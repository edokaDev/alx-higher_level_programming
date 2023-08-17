#!/usr/bin/python3

def weight_average(my_list=[]):
    if my_list == []:
        return 0

    weight_sum = 0
    total = 0
    for value, weight in my_list:
        total += weight
        weight_sum += value * weight
        average = weight_sum / total
    return average
