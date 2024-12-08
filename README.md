# MongoDB UpdateOne: Incorrect Use of $inc Operator

This example demonstrates an incorrect usage of the `$inc` operator within a MongoDB `updateOne` operation.  The `$inc` operator is used to increment a numeric field, but the following code snippet incorrectly tries to increment a field without proper quoting, leading to a MongoDB error.

## Bug
The provided code attempts to increment the `name` field using `$inc`. However, this will fail because `name` is a string, not a number, and it's not enclosed in quotes within the `$inc` object. The correct way is to enclose the field name in quotes. 

## Solution
The solution shows the correct usage of the `$inc` operator. The `name` field should be enclosed in quotes and the field must be of numeric type. If it's not numeric then a different operator or approach would need to be used to modify the field.