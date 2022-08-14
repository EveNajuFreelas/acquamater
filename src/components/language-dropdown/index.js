import { MenuItem, Select } from '@mui/material';
import { useState } from 'react';
import { changeLang } from '../../i18n';

export const LanguageDropdown = () => {
    const [lang, setLang] = useState('pt-BR');

    const handleChange = (event) => {
        const { value } = event.target;

        setLang(value);
        changeLang(value);
    }

    return (
        <Select
            value={lang}
            label="Language"
            onChange={handleChange}
        >
            <MenuItem value="pt-BR">Português - BR</MenuItem>
            <MenuItem value="en-US">English - US</MenuItem>
        </Select>
    );
};