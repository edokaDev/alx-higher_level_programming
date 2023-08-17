#!/usr/bin/python3

def best_score(a_dictionary):
    if not a_dictionary:
        return None

    max_val = float('-inf')
    best_student = None

    for student, score in a_dictionary.items():
        if score > max_val:
            max_val = score
            best_student = student
    return best_student
