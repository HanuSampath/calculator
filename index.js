var displayArea = document.getElementById('display')
function isOperator(buttonText)
{
    if(buttonText == '+' || buttonText == '-' || buttonText == '*' || buttonText == '/' || buttonText == '%')
        return true
    else
        return false
}
// function buttonClicked(buttonText)
// {
//     if(displayArea.innerText.length >= 24)
//         return
//     if(buttonText != 'clear' && buttonText != 'del' && buttonText != '=')
//     {
//         if(displayArea.innerText === '0')
//         {
//             if(buttonText != '0' && buttonText != '00') // for adding further zeros
//             {
//                 if(buttonText == '.' || isOperator(buttonText)) // for getting 0.3...
//                 {
//                     displayArea.innerText = displayArea.innerText + buttonText
//                 }
//                 else
//                 {
//                         displayArea.innerText = buttonText
//                 }
//             }   
//         }
//         else
//         {
           
//             if(isOperator(displayArea.innerText[displayArea.innerText.length-1]) && isOperator(buttonText))//to not concat two operations
//             {
//                 displayArea.innerText = displayArea.innerText.slice(0,-1)+buttonText
//             }
//             else
//             {
//                 if(buttonText != '.')
//                 {
//                     displayArea.innerText = displayArea.innerText + buttonText
//                 }
//                 else if(!displayArea.innerText.includes('.'))
//                 {
//                     displayArea.innerText = displayArea.innerText + buttonText
//                 }   
//             }
//         }
//     }
//     else
//     {
//         if(buttonText == 'clear')
//         {
//             displayArea.innerText = '0'
//         }
//         else if(buttonText == 'del')
//         {
//             displayArea.innerText = displayArea.innerText.slice(0,-1)
//         }
//         else if (buttonText == '=')
//         {
//             try
//             {
//                 displayArea.innerText = eval(displayArea.innerText)//eval for arithematic operation in strings
//             }
//             catch(error)
//             {
//                 displayArea.innerText = '0'
//             }
//         }
//     }
// }

function buttonClicked(buttonText)
{
    if(displayArea.innerText.length >= 24)
        return

    if(buttonText == 'clear')
    {
        displayArea.innerText = '0'
        return
    }
    if(buttonText == 'del')
    {
        displayArea.innerText = displayArea.innerText.slice(0,-1)
        return
    }
    if (buttonText === '=')
    {
        try
        {
            displayArea.innerText = eval(displayArea.innerText)//eval for arithematic operation in strings
        }
        catch(error)
        {
            displayArea.innerText = 0
        }
        return
    }

        if(displayArea.innerText === '0')
        {
            if(buttonText == '0' || buttonText == '00') // for adding further zeros
                return
                
            if(buttonText == '.' || isOperator(buttonText)) // for getting 0.3...
                {
                    displayArea.innerText = displayArea.innerText + buttonText
                    return
                }
                
                displayArea.innerText = buttonText
            }   
        else
        {
           
            if(isOperator(displayArea.innerText[displayArea.innerText.length-1]) && isOperator(buttonText))//to not concat two operations
            {
                displayArea.innerText = displayArea.innerText.slice(0,-1)+buttonText
                return
            }
            
            displayArea.innerText = displayArea.innerText + buttonText
        }
}