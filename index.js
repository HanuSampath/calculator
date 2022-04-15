var displayArea = document.getElementById('display')
function isOperator(buttonText)
{
    if(buttonText == '+' || buttonText == '-' || buttonText == '*' || buttonText == '/' || buttonText == '%')
        return true
    else
        return false
}
function buttonClicked(buttonText)
{
    if(displayArea.innerText === '0')
    {
        if(buttonText != '00' || buttonText != '0') // for adding further zeros
        {
            if(buttonText == '.' || isOperator(buttonText)) // for getting 0.3...
            {
                displayArea.innerText = displayArea.innerText + buttonText
            }
            else
            {
                if(isOperator(displayArea.innerText[displayArea.innerText.length-1]) && isOperator(buttonText))
                {

                }
                else
                {
                    displayArea.innerText = buttonText
                }
            }
        }   
    }
    else
    {
        displayArea.innerText = displayArea.innerText + buttonText
    }
}