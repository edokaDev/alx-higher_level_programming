#!/usr/bin/python3

if __name__ == "__main__":
    from calculator_1 import add, sub, mul, div
    import sys

    args = sys.argv[1:]
    arg_len = len(args)

    if arg_len != 3:
        print("Usage: ./100-my_calculator.py <a> <operator> <b>")
        exit(1)
    a = int(args[0])
    b = int(args[2])

    if args[1] == '+':
        t_sum = add(a, b)
        print("{} + {} = {}".format(a, b, t_sum))
    elif args[1] == '-':
        dif = sub(a, b)
        print("{} + {} = {}".format(a, b, dif))
    elif args[1] == '*':
        product = mul(a, b)
        print("{} + {} = {}".format(a, b, product))
    elif args[1] == '/':
        dv = div(a, b)
        print("{} + {} = {}".format(a, b, dv))
    else:
        print("Unknown operator. Available operators: +, -, * and /")
        exit(1)
