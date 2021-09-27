import React from 'react';
import {
    BlockConfidence, BlockDivServiceItem,
    BlockImgConfidence,
    BlockImgConfidenceStar,
    BlockLi,
    BlockPConfidence,
    BlockPConfidenceUp, BlockPHeader,
    BlockPLi, BlockPRegistration,
    BlockPService,
    BlockPServiceItem,
    BlockPServiceItemAbove, BlockRegistration,
    BlockService,
    ButtonRegister,
    GreenBlock, GreenBlockDiv,
    GreenBlockImgHeader,
    GreenBlockImgTextUser,
    GreenBlockPHeader,
    GreenBlockPText,
    GreenBlockPTextUser, GreenBlockUser
} from '../../ui/MaterialStyles';
import {Box, Container, Typography} from "@material-ui/core";

import './content.css'

const Content = () => {
    return (
        <>
            <Container sx={{m: '0 auto', mt: '72px'}}>
                <Typography sx={{color: '#14a800', fontSize: '40px', fontWeight: '800', lineHeight: 'normal'}}>
                    <BlockPHeader>
                        Сервис для подготовки закупочных <br/>процедур по 44 и 223 ФЗ
                    </BlockPHeader>
                </Typography>
                <ul>
                    <BlockLi>
                        <Box sx={{display: 'flex'}}>
                            <li>
                                <Typography sx={{fontSize: '18px'}}>
                                    <BlockPLi>
                                        Сотни готовых технических заданий
                                    </BlockPLi>
                                </Typography>
                            </li>
                            <li>
                                <Typography sx={{fontSize: '18px'}}>
                                    <BlockPLi>
                                        Подбор ОКПД2 и КТРУ
                                    </BlockPLi>
                                </Typography>
                            </li>
                        </Box>
                    </BlockLi>

                </ul>
                <ButtonRegister sx={{
                    p: '0',
                    border: 0,
                    mt: '24px',
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
                }}>Зарегистрироваться</ButtonRegister>
                <BlockConfidence
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mt: '87px',
                        pb: '20px',
                        borderBottom: '1px solid #d7d7d7'
                    }}>
                    <Typography
                        sx={{
                            color: '#5e6d55',
                            fontSize: '14px',
                            mr: '18px'
                        }}>
                        <BlockPConfidence>
                            Нам доверяют
                        </BlockPConfidence>
                    </Typography>
                    <Box sx={{display: 'flex', flexGrow: 1, justifyContent: 'space-between'}}>
                        <Box sx={{display: 'flex', alignItems: 'center'}}>
                            <BlockImgConfidence
                                width="40px"
                                height="40px"
                                src="./img/school.png"
                                alt="logo"
                            />
                            <Typography
                                sx={{color: 'black', fontSize: '14px', fontWeight: '800', ml: '10px'}}>
                                <BlockPConfidence>
                                    Высшая Школа <br/>Экономики
                                </BlockPConfidence>
                            </Typography>
                        </Box>
                        <Box sx={{display: 'flex', alignItems: 'center'}}>
                            <BlockImgConfidence
                                width="40px"
                                height="40px"
                                src="./img/grant.png"
                                alt="logo"
                            />
                            <Typography
                                sx={{color: 'black', fontSize: '28px', fontWeight: '800', ml: '10px'}}>
                                <BlockPConfidenceUp>
                                    ГРАНТ
                                </BlockPConfidenceUp>
                            </Typography>
                        </Box>
                        <Box sx={{display: 'flex', alignItems: 'center'}}>
                            <BlockImgConfidence
                                width="40px"
                                height="40px"
                                src="./img/mgu.png"
                                alt="logo"
                            />
                            <Typography
                                sx={{color: 'black', fontSize: '28px', fontWeight: '800', ml: '10px'}}>
                                <BlockPConfidenceUp>
                                    МГУ
                                </BlockPConfidenceUp>
                            </Typography>
                        </Box>
                        <Box sx={{display: 'flex', alignItems: 'center'}}>
                            <BlockImgConfidence
                                width="40px"
                                height="40px"
                                src="./img/dm.png"
                                alt="logo"
                            />
                            <Typography
                                sx={{color: 'black', fontSize: '14px', fontWeight: '800', ml: '10px'}}>
                                <BlockPConfidence>
                                    Дарвиновский Музей
                                </BlockPConfidence>
                            </Typography>
                        </Box>
                        <Box sx={{display: 'flex', alignItems: 'center'}}>
                            <BlockImgConfidenceStar
                                width="31px"
                                height="40px"
                                src="./img/spbgi.png"
                                alt="logo"
                            />
                            <Typography
                                sx={{color: 'black', fontSize: '14px', fontWeight: '800', ml: '10px'}}>
                                <BlockPConfidence>
                                    Санкт-Петербургский <br/>горный университет
                                </BlockPConfidence>
                            </Typography>
                        </Box>
                    </Box>
                </BlockConfidence>
                <BlockService>
                    <Typography sx={{color: 'black', fontSize: '40px', fontWeight: '800'}}>
                        <BlockPService>
                            Как работать с сервисом
                        </BlockPService>
                    </Typography>
                    <Typography sx={{color: 'black', fontSize: '18px'}}>
                        <BlockPServiceItem>
                            Скачивайте готовые технические задания по 44-ФЗ и 223-ФЗ в один клик.
                        </BlockPServiceItem>
                    </Typography>
                    <Box sx={{display: 'flex', justifyContent: 'space-between', mt: '52px'}}>
                        <BlockDivServiceItem sx={{mr: '20px'}}>
                            <Typography sx={{color: 'black', fontSize: '18px', fontWeight: '800'}}>
                                <BlockPServiceItem>
                                    Найдите товар
                                </BlockPServiceItem>
                            </Typography>
                            <Typography sx={{color: 'black', fontSize: '16px', lineHeight: 'normal'}}>
                                <BlockPServiceItemAbove>
                                    В нашей базе сотни готовых технических заданий, созданных другими пользователями -
                                    сотрудниками отделов закупки.
                                </BlockPServiceItemAbove>
                            </Typography>
                        </BlockDivServiceItem>
                        <BlockDivServiceItem sx={{mr: '20px'}}>
                            <Typography sx={{color: 'black', fontSize: '18px', fontWeight: '800'}}>
                                <BlockPServiceItem>
                                    Создайте спецификацию
                                </BlockPServiceItem>
                            </Typography>
                            <Typography sx={{color: 'black', fontSize: '16px', lineHeight: 'normal'}}>
                                <BlockPServiceItemAbove>
                                    Спецификация создается на основе технических заданий в нашей
                                    базе. Вам нужно лишь закон
                                    и
                                    проставить необходимые количества позиций.
                                </BlockPServiceItemAbove>
                            </Typography>
                        </BlockDivServiceItem>
                        <BlockDivServiceItem sx={{mr: '20px'}}>
                            <Typography sx={{color: 'black', fontSize: '18px', fontWeight: '800'}}>
                                <BlockPServiceItem>
                                    Получите документацию
                                </BlockPServiceItem>
                            </Typography>
                            <Typography sx={{color: 'black', fontSize: '16px', lineHeight: 'normal'}}>
                                <BlockPServiceItemAbove>
                                    Спецификация, содержащая выбранные технические задания, выгружается в формате .DOC
                                    по
                                    подготовленным шаблонам
                                </BlockPServiceItemAbove>
                            </Typography>
                        </BlockDivServiceItem>
                        <BlockDivServiceItem>
                            <Typography sx={{color: 'black', fontSize: '18px', fontWeight: '800'}}>
                                <BlockPServiceItem>Поделиться</BlockPServiceItem>
                            </Typography>
                            <Typography sx={{color: 'black', fontSize: '16px', lineHeight: 'normal'}}>
                                <BlockPServiceItemAbove>
                                    Вы можете передавать созданные технические задания внутри своей организации, а также
                                    другим
                                    пользователям сервиса.
                                </BlockPServiceItemAbove>
                            </Typography>
                        </BlockDivServiceItem>
                    </Box>
                </BlockService>
            </Container>
            <GreenBlock sx={{mt: '85px', bgcolor: '#13544e'}}>
                <GreenBlockDiv>
                    <Box sx={{display: 'flex', mb: '36px'}}>
                        <GreenBlockImgHeader
                            width="55px"
                            height="54px"
                            src="./img/mru.png"
                            alt="logo"
                        >
                        </GreenBlockImgHeader>
                        <Typography
                            sx={{color: 'white', fontSize: '32px', fontWeight: '800', ml: '10px'}}>
                            <GreenBlockPHeader>
                                РТУ МИРЭА
                            </GreenBlockPHeader>
                        </Typography>
                    </Box>
                    <Typography
                        sx={{color: 'white', fontSize: '24px', fontWeight: '800', lineHeight: 'normal'}}>
                        <GreenBlockPText>
                            "Каталог готовых технических заданий - это фантастическое преймущество при размещении
                            госзакупок. Сервис позволяет экономить десятки часов на каждую закупку."
                        </GreenBlockPText>
                    </Typography>
                    <GreenBlockUser sx={{display: 'flex', mt: '60px', pb: '36px'}}>
                        <GreenBlockImgTextUser
                            styles={{borderRadius: '20px'}}
                            width="40px"
                            height="40px"
                            src="./img/user.svg"
                            alt="logo"
                        />
                        <Box sx={{ml: '10px'}}>
                            <Typography
                                sx={{color: 'white', fontSize: '14px'}}>
                                <GreenBlockPTextUser>
                                    Игорь Томашевский
                                </GreenBlockPTextUser>
                            </Typography>
                            <Typography
                                sx={{color: 'white', fontSize: '14px'}}>
                                <GreenBlockPTextUser>
                                    Начальник информационно-вычислительного центра, РТУ МИРЭА
                                </GreenBlockPTextUser>
                            </Typography>
                        </Box>
                    </GreenBlockUser>
                </GreenBlockDiv>
            </GreenBlock>
            <BlockRegistration sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '268px',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Typography
                    sx={{color: 'black', fontWeight: '800', fontSize: '24px'}}>
                    <BlockPRegistration>
                        Начните автоматизацию закупок уже сейчас
                    </BlockPRegistration>
                </Typography>
                <ButtonRegister sx={{
                    p: '0',
                    border: 0,
                    mt: '15px',
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
                }}>Зарегистрироваться</ButtonRegister>
            </BlockRegistration>
        </>

    );
};

export default Content;