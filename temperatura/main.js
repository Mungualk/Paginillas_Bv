const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');
const kelvinInput = document.getElementById('input');

for(let i = 0; i < inputs.lenght; i++)
{
    let input = inputs[i];
    input.addEventListener('input', function(e)
        {
            let value = parseFloat(e.target.value);

            switch(e.target.name)
            {
                case 'celsius':
                    fahrenheitInput.value = (1.8 * value) + 32;
                    kelvinInput.value = value + 273.15;
                    break;
                case 'fahrenheit':
                    celsiusInput.values
            }
        }
    )
}