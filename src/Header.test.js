import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { Home } from './pages/Home';

describe('App', () => {

    //Teste para verificar o input de pesquisa
    test('verify-search', () => {
        const launch = [
            { 
                name: 'Polar Starlink-1',
                date_utc: '2021-06-30',
                details: null,
            },
            { 
                name: 'Starlink-1',
                date_utc: '2021-06-20',
                details: null,
            },
        ]
        const { container, getByTestId } = render(<Home list={launch}/>);

        const input = getByTestId("input-search");
        const button = getByTestId("button-search");

        // Input vazio, para exibir todo o array e passar no teste   
        fireEvent.change(input, { target: { value: '' }});

        // Para não passar no teste
        // fireEvent.change(input, { target: { value: 'p' }});

        fireEvent.click(button);

        // Irá verificar se existe o "Starlink-1"
        expect(!!getByTestId("Starlink-1")).toBe(true);
    });
});