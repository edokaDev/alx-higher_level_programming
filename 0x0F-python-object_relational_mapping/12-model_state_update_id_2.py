#!/usr/bin/python3
"""Update a state.

Changes the name of a column in a database.
"""
import sys
from model_state import Base, State
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

if __name__ == "__main__":
    engine = create_engine('mysql+mysqldb://{}:{}@localhost/{}'.format(
        sys.argv[1], sys.argv[2], sys.argv[3]), pool_pre_ping=True)

    Session = sessionmaker(engine)
    session = Session()

    object = session.query(State).filter_by(id=2).first()
    object.name = 'New Mexico'
    session.commit()
