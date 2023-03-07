// App setup
const express = require('express')
const calcmodule = require('./calcmodule')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Get values from body
app.post('/arithmetic', (req, res) => {
  const num1 = parseInt(req.body.num1)
  const num2 = parseInt(req.body.num2)
  const operator = req.body.operator

  // Checking for which operator was used and console logging the apporpriate function
  if (operator === 'add') {
    console.log(calcmodule.add2Nums(num1, num2))
  } else if (operator === 'sub') {
    console.log(calcmodule.sub2Nums(num1, num2))
  } else if (operator === 'multi') {
    console.log(calcmodule.multi2Nums(num1, num2))
  } if (operator === 'div') {
    console.log(calcmodule.div2Nums(num1, num2))
  }
})

app.listen(3030, () => {
  console.log('Server is running on port 3030.. better go catch it!')
})
