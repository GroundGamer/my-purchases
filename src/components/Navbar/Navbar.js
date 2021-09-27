import React from 'react';
import {NavButtonLogin, NavButtonRegister, NavPHeader} from '../../ui/MaterialStyles';
import {Container, Typography} from "@material-ui/core";

const Navbar = () => {
    return (
        <Container sx={{display: 'flex', alignItems: 'center', m: '0 auto', pt: '13px'}}>
            <Typography sx={{flexGrow: 1, color: '#14a800', fontSize: '24px', fontWeight: '800'}}>
                <NavPHeader>
                    Мои-закупки.рф
                </NavPHeader>
            </Typography>
            <NavButtonLogin sx={{
                p: '0',
                fontSize: '18px',
                border: 0,
                cursor: 'pointer',
                bgcolor: 'transparent',
                fontWeight: '400',
                fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
                textTransform: 'capitalize',
                mr: '15px',
                width: 0,
                height: 0,
                color: 'black',
                '&:hover': {bgcolor: 'transparent'}
            }}>
                Войти
            </NavButtonLogin>
            <NavButtonRegister sx={{
                p: '0',
                border: 0,
                borderRadius: '15px',
                cursor: 'pointer',
                width: '197px',
                height: '40px',
                color: 'white',
                bgcolor: '#14a800',
                fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
                transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                '&:hover': {
                    bgcolor: '#2fcc1e'
                }
            }}>Зарегистрироваться</NavButtonRegister>
        </Container>
    );
};

export default Navbar;