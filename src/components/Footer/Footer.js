import React from 'react';
import {FooterBlock, FooterBlockP, FooterBlockPStar} from '../../ui/MaterialStyles';
import {Box, Container} from "@material-ui/core";

const Footer = () => {
    return (
        <Box sx={{
            display: 'flex', alignItems: 'center', m: '0 auto', bgcolor: '#001e00', width: '100%'
        }}>
            <Container sx={{m: '0 auto'}}>
                <FooterBlock sx={{display: 'flex', alignItems: 'center'}}>
                    <FooterBlockPStar sx={{color: 'white', fontSize: '13px', flexGrow: 1}}>
                        © 2021 Мои-закупки.рф
                    </FooterBlockPStar>
                        <FooterBlockP sx={{color: 'white', fontSize: '13px', mr: '15px', cursor: 'pointer'}}>
                            Условия пользования
                        </FooterBlockP>
                        <FooterBlockP sx={{color: 'white', fontSize: '13px', mr: '15px', cursor: 'pointer'}}>
                            Политика конфиденциальности
                        </FooterBlockP>
                </FooterBlock>
            </Container>
        </Box>
    );
};

export default Footer;