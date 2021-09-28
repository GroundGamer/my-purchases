import {styled} from '@mui/material/styles';

// Navbar

export const NavPHeader = styled('p')(({theme}) => ({
    [theme.breakpoints.up('xs')]: {
        margin: '0px',
        fontSize: '12px'
    },
    [theme.breakpoints.up('sm')]: {
        margin: '0px',
        fontSize: '20px'
    },
    [theme.breakpoints.up('md')]: {
        margin: '0px',
        fontSize: '22px'
    },
    [theme.breakpoints.up('lg')]: {
        margin: '0px',
        fontSize: '24px'
    },
}));

export const NavButtonLogin = styled('button')(({theme}) => ({
    [theme.breakpoints.up('xs')]: {
        width: '51px',
        height: '21px',
        fontSize: '12px',
        marginRight: '5px',
    },
    [theme.breakpoints.up('sm')]: {
        width: '51px',
        height: '21px',
        fontSize: '14px',
        marginRight: '10px',
    },
    [theme.breakpoints.up('md')]: {
        width: '51px',
        height: '21px',
        fontSize: '16px'
    },
    [theme.breakpoints.up('lg')]: {
        width: '51px',
        height: '21px',
        fontSize: '18px'
    },
}));

export const NavButtonRegister = styled('button')(({theme}) => ({
    [theme.breakpoints.up('xs')]: {
        width: '129px',
        height: '25px',
        fontSize: '12px',
        borderRadius: '5px',
    },
    [theme.breakpoints.up('sm')]: {
        width: '149px',
        height: '30px',
        fontSize: '14px',
        borderRadius: '8px',
    },
    [theme.breakpoints.up('md')]: {
        width: '171px',
        height: '35px',
        fontSize: '16px',
        borderRadius: '10px',
    },
    [theme.breakpoints.up('lg')]: {
        width: '197px',
        height: '40px',
        fontSize: '18px',
        borderRadius: '15px',
    },
}));

// Content

export const ButtonRegister = styled('button')(({theme}) => ({
    [theme.breakpoints.up('xs')]: {
        width: '129px',
        height: '25px',
        fontSize: '12px',
        borderRadius: '5px',
    },
    [theme.breakpoints.up('sm')]: {
        width: '149px',
        height: '30px',
        fontSize: '14px',
        borderRadius: '8px',
    },
    [theme.breakpoints.up('md')]: {
        width: '171px',
        height: '35px',
        fontSize: '16px',
        borderRadius: '10px',
    },
    [theme.breakpoints.up('lg')]: {
        width: '197px',
        height: '40px',
        fontSize: '18px',
        borderRadius: '15px',
    },
}));

export const BlockPLi = styled('p')(({theme}) => ({
    [theme.breakpoints.up('xs')]: {
        margin: '0px',
        fontSize: '12px'
    },
    [theme.breakpoints.up('sm')]: {
        margin: '0px',
        fontSize: '12px'
    },
    [theme.breakpoints.up('md')]: {
        margin: '0px',
        fontSize: '14px'
    },
    [theme.breakpoints.up('lg')]: {
        margin: '0px',
        fontSize: '18px'
    },
}));

export const BlockLi = styled('div')(({theme}) => ({
    [theme.breakpoints.up('xs')]: {
        margin: '0px',
        fontSize: '10px',
        flexDirection: 'column'
    },
    [theme.breakpoints.up('sm')]: {
        margin: '0px',
        fontSize: '12px',
        flexDirection: 'row'
    },
    [theme.breakpoints.up('md')]: {
        margin: '0px',
        fontSize: '14px',
        flexDirection: 'row'
    },
    [theme.breakpoints.up('lg')]: {
        margin: '0px',
        fontSize: '18px',
        flexDirection: 'row'
    },
}));

export const BlockPHeader = styled('p')(({theme}) => ({
    [theme.breakpoints.up('xs')]: {
        margin: '0px',
        fontSize: '22px'
    },
    [theme.breakpoints.up('sm')]: {
        margin: '0px',
        fontSize: '30px'
    },
    [theme.breakpoints.up('md')]: {
        margin: '0px',
        fontSize: '32px'
    },
    [theme.breakpoints.up('lg')]: {
        margin: '0px',
        fontSize: '40px'
    },
}));

export const BlockConfidence = styled('div')(({theme}) => ({
    [theme.breakpoints.up('xs')]: {
        marginTop: '30px',
        flexDirection: 'column'
    },
    [theme.breakpoints.up('sm')]: {
        marginTop: '52px',
        flexDirection: 'row'
    },
    [theme.breakpoints.up('md')]: {
        marginTop: '74px',
        flexDirection: 'row'
    },
    [theme.breakpoints.up('lg')]: {
        marginTop: '87px',
        flexDirection: 'row'
    },
}));

export const BlockConfidenceItem = styled('div')(({theme}) => ({
    [theme.breakpoints.up('xs')]: {
        flexDirection: 'column',
        width: '100%',
    },
    [theme.breakpoints.up('sm')]: {
        flexDirection: 'row',
        width: '0',
    },
    [theme.breakpoints.up('md')]: {
        flexDirection: 'row',
        width: '0',
    },
    [theme.breakpoints.up('lg')]: {
        flexDirection: 'row',
        width: '0',
    },
}));

export const BlockConfidenceItemSpecifically = styled('div')(({theme}) => ({
    [theme.breakpoints.up('xs')]: {
        marginBottom: '10px',
    },
    [theme.breakpoints.up('sm')]: {
        marginBottom: '0',

    },
    [theme.breakpoints.up('md')]: {
        marginBottom: '0',

    },
    [theme.breakpoints.up('lg')]: {
        marginBottom: '0',

    },
}));

export const BlockPConfidenceHeader = styled('p')(({theme}) => ({
    [theme.breakpoints.up('xs')]: {
        margin: '0px',
        marginBottom: '15px',
        fontSize: '14px',
        borderBottom: '1px solid #d7d7d7'
    },
    [theme.breakpoints.up('sm')]: {
        margin: '0px',
        fontSize: '10px',
        border: 0
    },
    [theme.breakpoints.up('md')]: {
        margin: '0px',
        fontSize: '12px',
        border: 0
    },
    [theme.breakpoints.up('lg')]: {
        margin: '0px',
        fontSize: '14px',
        border: 0
    },
}));

export const BlockPConfidence = styled('p')(({theme}) => ({
    [theme.breakpoints.up('xs')]: {
        margin: '0px',
        fontSize: '12px'
    },
    [theme.breakpoints.up('sm')]: {
        margin: '0px',
        fontSize: '10px'
    },
    [theme.breakpoints.up('md')]: {
        margin: '0px',
        fontSize: '12px'
    },
    [theme.breakpoints.up('lg')]: {
        margin: '0px',
        fontSize: '14px'
    },
}));

export const BlockImgConfidence = styled('img')(({theme}) => ({
    [theme.breakpoints.up('xs')]: {
        display: 'block',
        width: "35px",
        height: "35px",
    },
    [theme.breakpoints.up('sm')]: {
        display: 'block',
        width: "30px",
        height: "30px",
    },
    [theme.breakpoints.up('md')]: {
        display: 'block',
        width: "35px",
        height: "35px",
    },
    [theme.breakpoints.up('lg')]: {
        display: 'block',
        width: "40px",
        height: "40px",
    },
}));

export const BlockImgConfidenceStar = styled('img')(({theme}) => ({
    [theme.breakpoints.up('xs')]: {
        display: 'block',
        width: "26px",
        height: "35px",
        marginRight: '10px'
    },
    [theme.breakpoints.up('sm')]: {
        display: 'block',
        width: "21px",
        height: "30px",
    },
    [theme.breakpoints.up('md')]: {
        display: 'block',
        width: "26px",
        height: "35px",
    },
    [theme.breakpoints.up('lg')]: {
        display: 'block',
        width: "31px",
        height: "40px",
    },
}));

export const BlockPConfidenceUp = styled('p')(({theme}) => ({
    [theme.breakpoints.up('xs')]: {
        margin: '0px',
        fontSize: '16px'
    },
    [theme.breakpoints.up('sm')]: {
        margin: '0px',
        fontSize: '20px'
    },
    [theme.breakpoints.up('md')]: {
        margin: '0px',
        fontSize: '24px'
    },
    [theme.breakpoints.up('lg')]: {
        margin: '0px',
        fontSize: '28px'
    },
}));

export const BlockService = styled('div')(({theme}) => ({
    [theme.breakpoints.up('xs')]: {
        marginTop: '28px',
    },
    [theme.breakpoints.up('sm')]: {
        marginTop: '50px',
    },
    [theme.breakpoints.up('md')]: {
        marginTop: '62px',
    },
    [theme.breakpoints.up('lg')]: {
        marginTop: '84px',
    },
}));

export const BlockDivService = styled('div')(({theme}) => ({
    [theme.breakpoints.up('xs')]: {
        flexDirection: 'column',
        marginTop: '16px'
    },
    [theme.breakpoints.up('sm')]: {
        flexDirection: 'row',
        marginTop: '28px'
    },
    [theme.breakpoints.up('md')]: {
        flexDirection: 'row',
        marginTop: '40px'
    },
    [theme.breakpoints.up('lg')]: {
        flexDirection: 'row',
        marginTop: '52px'
    },
}));

export const BlockDivServiceItem = styled('div')(({theme}) => ({
    [theme.breakpoints.up('xs')]: {
        marginRight: '5px'
    },
    [theme.breakpoints.up('sm')]: {
        marginRight: '10px'
    },
    [theme.breakpoints.up('md')]: {
        marginRight: '15px'
    },
    [theme.breakpoints.up('lg')]: {
        marginRight: '20px'
    },
}));

export const BlockPService = styled('p')(({theme}) => ({
    [theme.breakpoints.up('xs')]: {
        margin: '0px',
        fontSize: '26px'
    },
    [theme.breakpoints.up('sm')]: {
        margin: '0px',
        fontSize: '28px'
    },
    [theme.breakpoints.up('md')]: {
        margin: '0px',
        fontSize: '32px'
    },
    [theme.breakpoints.up('lg')]: {
        margin: '0px',
        fontSize: '40px'
    },
}));

export const BlockPServiceItem = styled('p')(({theme}) => ({
    [theme.breakpoints.up('xs')]: {
        margin: '0px',
        fontSize: '14px'
    },
    [theme.breakpoints.up('sm')]: {
        margin: '0px',
        fontSize: '12px'
    },
    [theme.breakpoints.up('md')]: {
        margin: '0px',
        fontSize: '14px'
    },
    [theme.breakpoints.up('lg')]: {
        margin: '0px',
        fontSize: '18px'
    },
}));

export const BlockPServiceItemAbove = styled('p')(({theme}) => ({
    [theme.breakpoints.up('xs')]: {
        margin: '0px',
        marginBottom: '10px',
        fontSize: '12px',
    },
    [theme.breakpoints.up('sm')]: {
        margin: '0px',
        fontSize: '10px'
    },
    [theme.breakpoints.up('md')]: {
        margin: '0px',
        fontSize: '12px'
    },
    [theme.breakpoints.up('lg')]: {
        margin: '0px',
        fontSize: '16px'
    },
}));

export const GreenBlock = styled('div')(({theme}) => ({
    [theme.breakpoints.up('xs')]: {
        marginTop: '29px',
    },
    [theme.breakpoints.up('sm')]: {
        marginTop: '41px',
    },
    [theme.breakpoints.up('md')]: {
        marginTop: '63px',
    },
    [theme.breakpoints.up('lg')]: {
        marginTop: '85px',
    },
}));

export const GreenBlockDiv = styled('div')(({theme}) => ({
    [theme.breakpoints.up('xs')]: {
        paddingTop: '23px', width: '300px', margin: '0 auto'
    },
    [theme.breakpoints.up('sm')]: {
        paddingTop: '23px', width: '600px', margin: '0 auto'
    },
    [theme.breakpoints.up('md')]: {
        paddingTop: '23px', width: '680px', margin: '0 auto'
    },
    [theme.breakpoints.up('lg')]: {
        paddingTop: '23px', width: '710px', margin: '0 auto'
    },
}));

export const GreenBlockPHeader = styled('p')(({theme}) => ({
    [theme.breakpoints.up('xs')]: {
        margin: '0px',
        fontSize: '20px'
    },
    [theme.breakpoints.up('sm')]: {
        margin: '0px',
        fontSize: '20px'
    },
    [theme.breakpoints.up('md')]: {
        margin: '0px',
        fontSize: '24px'
    },
    [theme.breakpoints.up('lg')]: {
        margin: '0px',
        fontSize: '32px'
    },
}));

export const GreenBlockImgHeader = styled('img')(({theme}) => ({
    [theme.breakpoints.up('xs')]: {
        width: "35px",
        height: "34px",
    },
    [theme.breakpoints.up('sm')]: {
        width: "35px",
        height: "34px",
    },
    [theme.breakpoints.up('md')]: {
        width: "40px",
        height: "39px",
    },
    [theme.breakpoints.up('lg')]: {
        width: "55px",
        height: "54px",
    },
}));

export const GreenBlockPText = styled('p')(({theme}) => ({
    [theme.breakpoints.up('xs')]: {
        margin: '0px',
        fontSize: '16px',
    },
    [theme.breakpoints.up('sm')]: {
        margin: '0px',
        fontSize: '18px'
    },
    [theme.breakpoints.up('md')]: {
        margin: '0px',
        fontSize: '20px'
    },
    [theme.breakpoints.up('lg')]: {
        margin: '0px',
        fontSize: '24px'
    },
}));

export const GreenBlockPTextUser = styled('p')(({theme}) => ({
    [theme.breakpoints.down('md')]: {
        margin: '0px',
        fontSize: '12px'
    },
    [theme.breakpoints.up('md')]: {
        margin: '0px',
        fontSize: '12px'
    },
    [theme.breakpoints.up('lg')]: {
        margin: '0px',
        fontSize: '14px'
    },
}));

export const GreenBlockUser = styled('div')(({theme}) => ({
    [theme.breakpoints.up('xs')]: {
        marginTop: '30px'
    },
    [theme.breakpoints.up('sm')]: {
        marginTop: '40px'
    },
    [theme.breakpoints.up('md')]: {
        marginTop: '50px'
    },
    [theme.breakpoints.up('lg')]: {
        marginTop: '60px'
    },
}));

export const GreenBlockImgTextUser = styled('img')(({theme}) => ({
    [theme.breakpoints.down('md')]: {
        width: "35px",
        height: "35px",
    },
    [theme.breakpoints.up('md')]: {
        width: "35px",
        height: "35px",
    },
    [theme.breakpoints.up('lg')]: {
        width: "40px",
        height: "40px",
    },
}));

export const BlockRegistration = styled('div')(({theme}) => ({
    [theme.breakpoints.up('xs')]: {
        height: '136px',
    },
    [theme.breakpoints.up('sm')]: {
        height: '171px',
    },
    [theme.breakpoints.up('md')]: {
        height: '214px',
    },
    [theme.breakpoints.up('lg')]: {
        height: '268px',
    },
}));

export const BlockPRegistration = styled('p')(({theme}) => ({
    [theme.breakpoints.up('xs')]: {
        margin: '0px',
        fontSize: '14px'
    },
    [theme.breakpoints.up('md')]: {
        margin: '0px',
        fontSize: '20px'
    },
    [theme.breakpoints.up('md')]: {
        margin: '0px',
        fontSize: '22px'
    },
    [theme.breakpoints.up('lg')]: {
        margin: '0px',
        fontSize: '24px'
    },
}));

// Footer

export const FooterBlockP = styled('p')(({theme}) => ({
    [theme.breakpoints.up('xs')]: {
        margin: '0px',
        fontSize: '12px',
        marginBottom: '5px'
    },
    [theme.breakpoints.up('sm')]: {
        margin: '0px',
        fontSize: '9px'
    },
    [theme.breakpoints.up('md')]: {
        margin: '0px',
        fontSize: '11px'
    },
    [theme.breakpoints.up('lg')]: {
        margin: '0px',
        fontSize: '13px'
    },
}));

export const FooterBlockPStar = styled('p')(({theme}) => ({
    [theme.breakpoints.up('xs')]: {
        margin: '0px',
        fontSize: '12px',
        flexGrow: 0,
        marginBottom: '5px'
    },
    [theme.breakpoints.up('sm')]: {
        margin: '0px',
        fontSize: '9px',
        paddingLeft: '40px',
        flexGrow: 0
    },
    [theme.breakpoints.up('md')]: {
        margin: '0px',
        fontSize: '11px',
        paddingLeft: '60px',
        flexGrow: 0
    },
    [theme.breakpoints.up('lg')]: {
        margin: '0px',
        fontSize: '13px',
        paddingLeft: '80px',
        flexGrow: 0
    },
}));

export const FooterBlock = styled('div')(({theme}) => ({
    [theme.breakpoints.up('xs')]: {
        height: '82px',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    [theme.breakpoints.up('sm')]: {
        height: '94px',
        alignItems: 'center',
        flexDirection: 'row'
    },
    [theme.breakpoints.up('md')]: {
        height: '108px',
        alignItems: 'center',
        flexDirection: 'row'
    },
    [theme.breakpoints.up('lg')]: {
        height: '124px',
        alignItems: 'center',
        flexDirection: 'row'
    },
}));