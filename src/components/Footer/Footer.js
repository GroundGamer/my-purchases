import React from 'react';
import {FooterBlock, FooterBlockP, FooterBlockPStar} from '../../ui/MaterialStyles';
import {Box, Container, Typography} from "@material-ui/core";

const Footer = () => {
    return (
        <Box sx={{
            display: 'flex', alignItems: 'center', m: '0 auto', bgcolor: '#001e00', width: '100%'
        }}>
            <Container sx={{m: '0 auto'}}>
                <FooterBlock sx={{display: 'flex', alignItems: 'center'}}>
                    <Typography
                        sx={{color: 'white', fontSize: '13px', flexGrow: 1}}>
                        <FooterBlockPStar>
                            © 2021 Мои-закупки.рф
                        </FooterBlockPStar>
                    </Typography>
                    <Typography
                        sx={{color: 'white', fontSize: '13px', mr: '15px', cursor: 'pointer'}}>
                        <FooterBlockP>
                            Условия пользования
                        </FooterBlockP>
                    </Typography>
                    <Typography
                        sx={{color: 'white', fontSize: '13px', mr: '15px', cursor: 'pointer'}}>
                        <FooterBlockP>
                            Политика конфиденциальности
                        </FooterBlockP>
                    </Typography>
                </FooterBlock>
            </Container>
        </Box>
    );
};

export default Footer;