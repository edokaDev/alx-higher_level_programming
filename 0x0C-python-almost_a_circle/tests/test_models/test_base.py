#!/usr/bin/python3
"""Test for the base model."""

import unittest
from models.base import Base

class TestBaseClass(unittest.TestCase):
    """Test for the BaseClass."""

    def test_id_increment(self):
        """ID Increment Test."""
        inst1 = Base()
        inst2 = Base()
        inst3 = Base(id=5)

        # Check if their IDs are incremented
        self.assertEqual(inst2.id, 2)
        self.assertEqual(inst3.id, 5)
