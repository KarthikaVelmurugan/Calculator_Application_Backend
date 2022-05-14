const calculator = async (req, res) => {
  const values = req.body.values;
  const operationType = req.body.operationtype;
  let operation = "";
  let result = values && values.length > 0 && values[0];
  let result_1 = 1;

  if (values && values.length > 0) {
    if (values && values.length > 1) {
      values &&
        values.slice(1).map((value, index) => {
          if (typeof value == "number") {
            if (operationType == 1) {
              result = result + value;
              operation = "Sum";
            } else if (operationType == 2) {
              result = result - value;
              operation = "subtraction";
            } else if (operationType == 3) {
              result_1 = result_1 * value;
              operation = "multiplication";
            } else if (operationType == 4) {
              result_1 = result_1 / value;
              operation = "division";
            } else {
              result = 0;
              operation = "none";
              res.json({
                status: 400,
                message: "Your operation type is invalid",
              });
            }
          } else {
            res.json({ status: 400, message: "Please enter the valid number" });
          }
        });

      res.json({
        status: 200,
        message: `Your total ${operation} is ${
          operationType == 3 || operationType == 4 ? result_1 : result
        }`,
      });
    } else {
      res.json({
        status: 400,
        message: "the system desn't do the operation for single value",
      });
    }
  } else {
    res.json({
      status: 400,
      message: "Your values are empty",
    });
  }
};

module.exports = {
  calculator: calculator,
};
