import decrease from './src/assets/decrease.svg';
import increase from './src/assets/increase.svg';
import green from './src/assets/green.svg';
import red from './src/assets/red.svg';
import blue from './src/assets/blue.svg';
import orange from './src/assets/orange.svg';
import rotate from './src/assets/rotate.svg';
import boxtick from './src/assets/boxtick.svg';
import coin from './src/assets/coin.svg';
import cart from './src/assets/cart.svg';
import AccountBalance from './src/assets/AccountBalance.svg';
import arrowDown from './src/assets/arrowDown.svg';
import arrowUp from './src/assets/arrowUp.svg';
import percent from './src/assets/percent.svg';


export const platform = [
    {
        id: 1,
        amount: 2500000,
        title: "Book Bazaar",
        percent: 15,
        color:"#6160DC",
    },
    {
        id: 2,
        amount: 1800000,
        title: "Artisan Aisle",
        percent: 10,
        color:"#54C5EB",
    },
    {
        id: 3,
        amount: 1200000,
        title: "Toy Troop",
        percent: 8,
        color:"#FFB74A",
    },
    {
        id: 4,
        amount: 600000,
        title: "XStore",
        percent: 5,
        color:"#FF4A55",
    },
]

export const order = [
    {
        id:1,
        img:'',
        name:'Marcus Bergson',
        date:'Nov 15, 2023',
        amount:'80,000',
        status:'Paid',
        color:'#34CAA5'
    },
    {
        id:2,
        img:'',
        name:'Jaydon Vaccaro',
        date:'Nov 15, 2023',
        amount:'150,000',
        status:'Refund',
        color:'#ED544E'
    },
    {
        id:3,
        img:'',
        name:'Corey Schleifer',
        date:'Nov 14, 2023',
        amount:'87,000',
        status:'Paid',
        color:'#34CAA5'
    },
    {
        id:4,
        img:'',
        name:'Corey Press',
        date:'Nov 14, 2023',
        amount:'100,000',
        status:'Refund',
        color:'#ED544E'
    },
    {
        id:5,
        img:'',
        name:'Phillip Lubin',
        date:'Nov 13, 2023',
        amount:'78,000',
        status:'Paid',
        color:'#34CAA5'
    },
]

export const report = [
    {
        id:1,
        icon:boxtick,
        status:green,
        title:'Revenue',
        amount:"$7,825",
        percent:'+22%',
        status1:increase,
        color:'#34CAA5',
        backgroundColor: '52, 202, 165',
    },
    {
        id:2,
        icon:rotate,
        status:red,
        title:'Total Refund',
        amount:920,
        percent:'-25%',
        status1:decrease,
        color:'#ED544E',
        backgroundColor: '237, 84, 78',
    },
    {
        id:3,
        icon:cart,
        status:blue,
        title:'Total Refund',
        amount:"15.5K",
        percent:'+49%',
        status1:decrease,
        color:'#ED544E',
        backgroundColor: '237, 84, 78',
    },
    {
        id:4,
        icon:coin,
        status:orange,
        title:'Average Sales',
        amount:"15.5K",
        percent:'+35%',
        status1:increase,
        color:'#34CAA5',
        backgroundColor: '52, 202, 165',
    },
]

export const vendorReport = [
    {
        id:1,
        icon:arrowDown,
        title:'Total inflow',
        amount:"₦6,000,825",
    },
    {
        id:2,
        icon:arrowUp,
        title:'Total Outflow',
        amount:"₦400,000",
    },
    {
        id:3,
        icon:AccountBalance,
        title:'Vendors Total Balance',
        amount:"₦4,000,825",
    },
    {
        id:4,
        icon:percent,
        title:'Commission from Vendors',
        amount:"6,000,000",
    },
]

export const customers = [
    {
        id:1,
        name:"Anjous Tope",
        gender:"Female",
        email:"eleanorpena@domain.com",
        phoneNo:"08012345678",
        Address:"1, Check Street, Ibadan, Nigeria",
        bank:[
            {
                bankName:"Opay Bank",
                AccountNo:2085209073
            }
        ],
        others:[
            {
                dateReg:'01-05-2023 at 11:34 pm',
                lastSeen:"Yesterday at 09:04 AM",
                AccountStatus:"Active"
            }
        ]
    },
    {
        id:2,
        name:"Anjous Tope",
        gender:"Female",
        email:"eleanorpena@domain.com",
        phoneNo:"08012345678",
        Address:"1, Check Street, Ibadan, Nigeria",
        bank:[
            {
                bankName:"Opay Bank",
                AccountNo:2085209073
            }
        ],
        others:[
            {
                dateReg:'01-05-2023 at 11:34 pm',
                lastSeen:"Yesterday at 09:04 AM",
                AccountStatus:"Active"
            }
        ]
    },
    {
        id:3,
        name:"Anjous Tope",
        gender:"Female",
        email:"eleanorpena@domain.com",
        phoneNo:"08012345678",
        Address:"1, Check Street, Ibadan, Nigeria",
        bank:[
            {
                bankName:"Opay Bank",
                AccountNo:2085209073
            }
        ],
        others:[
            {
                dateReg:'01-05-2023 at 11:34 pm',
                lastSeen:"Yesterday at 09:04 AM",
                AccountStatus:"Active"
            }
        ]
    },
    {
        id:4,
        name:"Anjous Tope",
        gender:"Female",
        email:"eleanorpena@domain.com",
        phoneNo:"08012345678",
        Address:"1, Check Street, Ibadan, Nigeria",
        bank:[
            {
                bankName:"Opay Bank",
                AccountNo:2085209073
            }
        ],
        others:[
            {
                dateReg:'01-05-2023 at 11:34 pm',
                lastSeen:"Yesterday at 09:04 AM",
                AccountStatus:"Active"
            }
        ]
    },
    {
        id:5,
        name:"Anjous Tope",
        gender:"Female",
        email:"eleanorpena@domain.com",
        phoneNo:"08012345678",
        Address:"1, Check Street, Ibadan, Nigeria",
        bank:[
            {
                bankName:"Opay Bank",
                AccountNo:2085209073
            }
        ],
        others:[
            {
                dateReg:'01-05-2023 at 11:34 pm',
                lastSeen:"Yesterday at 09:04 AM",
                AccountStatus:"Active"
            }
        ]
    },
    {
        id:6,
        name:"Anjous Tope",
        gender:"Female",
        email:"eleanorpena@domain.com",
        phoneNo:"08012345678",
        Address:"1, Check Street, Ibadan, Nigeria",
        bank:[
            {
                bankName:"Opay Bank",
                AccountNo:2085209073
            }
        ],
        others:[
            {
                dateReg:'01-05-2023 at 11:34 pm',
                lastSeen:"Yesterday at 09:04 AM",
                AccountStatus:"Active"
            }
        ]
    },
    {
        id:7,
        name:"Anjous Tope",
        gender:"Female",
        email:"eleanorpena@domain.com",
        phoneNo:"08012345678",
        Address:"1, Check Street, Ibadan, Nigeria",
        bank:[
            {
                bankName:"Opay Bank",
                AccountNo:2085209073
            }
        ],
        others:[
            {
                dateReg:'01-05-2023 at 11:34 pm',
                lastSeen:"Yesterday at 09:04 AM",
                AccountStatus:"Active"
            }
        ]
    },
    {
        id:8,
        name:"Anjous Tope",
        gender:"Female",
        email:"eleanorpena@domain.com",
        phoneNo:"08012345678",
        Address:"1, Check Street, Ibadan, Nigeria",
        bank:[
            {
                bankName:"Opay Bank",
                AccountNo:2085209073
            }
        ],
        others:[
            {
                dateReg:'01-05-2023 at 11:34 pm',
                lastSeen:"Yesterday at 09:04 AM",
                AccountStatus:"Active"
            }
        ]
    },
    {
        id:9,
        name:"Anjous Tope",
        gender:"Female",
        email:"eleanorpena@domain.com",
        phoneNo:"08012345678",
        Address:"1, Check Street, Ibadan, Nigeria",
        bank:[
            {
                bankName:"Opay Bank",
                AccountNo:2085209073
            }
        ],
        others:[
            {
                dateReg:'01-05-2023 at 11:34 pm',
                lastSeen:"Yesterday at 09:04 AM",
                AccountStatus:"Active"
            }
        ]
    },
    {
        id:10,
        name:"Anjous Tope",
        gender:"Female",
        email:"eleanorpena@domain.com",
        phoneNo:"08012345678",
        Address:"1, Check Street, Ibadan, Nigeria",
        bank:[
            {
                bankName:"Opay Bank",
                AccountNo:2085209073
            }
        ],
        others:[
            {
                dateReg:'01-05-2023 at 11:34 pm',
                lastSeen:"Yesterday at 09:04 AM",
                AccountStatus:"Active"
            }
        ]
    },
    {
        id:11,
        name:"Anjous Tope",
        gender:"Female",
        email:"eleanorpena@domain.com",
        phoneNo:"08012345678",
        Address:"1, Check Street, Ibadan, Nigeria",
        bank:[
            {
                bankName:"Opay Bank",
                AccountNo:2085209073
            }
        ],
        others:[
            {
                dateReg:'01-05-2023 at 11:34 pm',
                lastSeen:"Yesterday at 09:04 AM",
                AccountStatus:"Active"
            }
        ]
    },
    {
        id:12,
        name:"Anjous Tope",
        gender:"Female",
        email:"eleanorpena@domain.com",
        phoneNo:"08012345678",
        Address:"1, Check Street, Ibadan, Nigeria",
        bank:[
            {
                bankName:"Opay Bank",
                AccountNo:2085209073
            }
        ],
        others:[
            {
                dateReg:'01-05-2023 at 11:34 pm',
                lastSeen:"Yesterday at 09:04 AM",
                AccountStatus:"Active"
            }
        ]
    },
    {
        id:13,
        name:"Anjous Tope",
        gender:"Female",
        email:"eleanorpena@domain.com",
        phoneNo:"08012345678",
        Address:"1, Check Street, Ibadan, Nigeria",
        bank:[
            {
                bankName:"Opay Bank",
                AccountNo:2085209073
            }
        ],
        others:[
            {
                dateReg:'01-05-2023 at 11:34 pm',
                lastSeen:"Yesterday at 09:04 AM",
                AccountStatus:"Active"
            }
        ]
    },
    {
        id:14,
        name:"Anjous Tope",
        gender:"Female",
        email:"eleanorpena@domain.com",
        phoneNo:"08012345678",
        Address:"1, Check Street, Ibadan, Nigeria",
        bank:[
            {
                bankName:"Opay Bank",
                AccountNo:2085209073
            }
        ],
        others:[
            {
                dateReg:'01-05-2023 at 11:34 pm',
                lastSeen:"Yesterday at 09:04 AM",
                AccountStatus:"Active"
            }
        ]
    },
    {
        id:15,
        name:"Anjous Tope",
        gender:"Female",
        email:"eleanorpena@domain.com",
        phoneNo:"08012345678",
        Address:"1, Check Street, Ibadan, Nigeria",
        bank:[
            {
                bankName:"Opay Bank",
                AccountNo:2085209073
            }
        ],
        others:[
            {
                dateReg:'01-05-2023 at 11:34 pm',
                lastSeen:"Yesterday at 09:04 AM",
                AccountStatus:"Active"
            }
        ]
    },
    {
        id:16,
        name:"Anjous Tope",
        gender:"Female",
        email:"eleanorpena@domain.com",
        phoneNo:"08012345678",
        Address:"1, Check Street, Ibadan, Nigeria",
        bank:[
            {
                bankName:"Opay Bank",
                AccountNo:2085209073
            }
        ],
        others:[
            {
                dateReg:'01-05-2023 at 11:34 pm',
                lastSeen:"Yesterday at 09:04 AM",
                AccountStatus:"Active"
            }
        ]
    },
    {
        id:17,
        name:"Anjous Tope",
        gender:"Female",
        email:"eleanorpena@domain.com",
        phoneNo:"08012345678",
        Address:"1, Check Street, Ibadan, Nigeria",
        bank:[
            {
                bankName:"Opay Bank",
                AccountNo:2085209073
            }
        ],
        others:[
            {
                dateReg:'01-05-2023 at 11:34 pm',
                lastSeen:"Yesterday at 09:04 AM",
                AccountStatus:"Active"
            }
        ]
    },
    {
        id:18,
        name:"Anjous Tope",
        gender:"Female",
        email:"eleanorpena@domain.com",
        phoneNo:"08012345678",
        Address:"1, Check Street, Ibadan, Nigeria",
        bank:[
            {
                bankName:"Opay Bank",
                AccountNo:2085209073
            }
        ],
        others:[
            {
                dateReg:'01-05-2023 at 11:34 pm',
                lastSeen:"Yesterday at 09:04 AM",
                AccountStatus:"Active"
            }
        ]
    },
    {
        id:19,
        name:"Anjous Tope",
        gender:"Female",
        email:"eleanorpena@domain.com",
        phoneNo:"08012345678",
        Address:"1, Check Street, Ibadan, Nigeria",
        bank:[
            {
                bankName:"Opay Bank",
                AccountNo:2085209073
            }
        ],
        others:[
            {
                dateReg:'01-05-2023 at 11:34 pm',
                lastSeen:"Yesterday at 09:04 AM",
                AccountStatus:"Active"
            }
        ]
    },
    {
        id:20,
        name:"Anjous Tope",
        gender:"Female",
        email:"eleanorpena@domain.com",
        phoneNo:"08012345678",
        Address:"1, Check Street, Ibadan, Nigeria",
        bank:[
            {
                bankName:"Opay Bank",
                AccountNo:2085209073
            }
        ],
        others:[
            {
                dateReg:'01-05-2023 at 11:34 pm',
                lastSeen:"Yesterday at 09:04 AM",
                AccountStatus:"Active"
            }
        ]
    },
    {
        id:21,
        name:"Anjous Tope",
        gender:"Female",
        email:"eleanorpena@domain.com",
        phoneNo:"08012345678",
        Address:"1, Check Street, Ibadan, Nigeria",
        bank:[
            {
                bankName:"Opay Bank",
                AccountNo:2085209073
            }
        ],
        others:[
            {
                dateReg:'01-05-2023 at 11:34 pm',
                lastSeen:"Yesterday at 09:04 AM",
                AccountStatus:"Active"
            }
        ]
    },
    {
        id:22,
        name:"Anjous Tope",
        gender:"Female",
        email:"eleanorpena@domain.com",
        phoneNo:"08012345678",
        Address:"1, Check Street, Ibadan, Nigeria",
        bank:[
            {
                bankName:"Opay Bank",
                AccountNo:2085209073
            }
        ],
        others:[
            {
                dateReg:'01-05-2023 at 11:34 pm',
                lastSeen:"Yesterday at 09:04 AM",
                AccountStatus:"Active"
            }
        ]
    },
    {
        id:23,
        name:"Anjous Tope",
        gender:"Female",
        email:"eleanorpena@domain.com",
        phoneNo:"08012345678",
        Address:"1, Check Street, Ibadan, Nigeria",
        bank:[
            {
                bankName:"Opay Bank",
                AccountNo:2085209073
            }
        ],
        others:[
            {
                dateReg:'01-05-2023 at 11:34 pm',
                lastSeen:"Yesterday at 09:04 AM",
                AccountStatus:"Active"
            }
        ]
    },
    {
        id:24,
        name:"Anjous Tope",
        gender:"Female",
        email:"eleanorpena@domain.com",
        phoneNo:"08012345678",
        Address:"1, Check Street, Ibadan, Nigeria",
        bank:[
            {
                bankName:"Opay Bank",
                AccountNo:2085209073
            }
        ],
        others:[
            {
                dateReg:'01-05-2023 at 11:34 pm',
                lastSeen:"Yesterday at 09:04 AM",
                AccountStatus:"Active"
            }
        ]
    },
    {
        id:25,
        name:"Anjous Tope",
        gender:"Female",
        email:"eleanorpena@domain.com",
        phoneNo:"08012345678",
        Address:"1, Check Street, Ibadan, Nigeria",
        bank:[
            {
                bankName:"Opay Bank",
                AccountNo:2085209073
            }
        ],
        others:[
            {
                dateReg:'01-05-2023 at 11:34 pm',
                lastSeen:"Yesterday at 09:04 AM",
                AccountStatus:"Active"
            }
        ]
    },
    {
        id:26,
        name:"Anjous Tope",
        gender:"Female",
        email:"eleanorpena@domain.com",
        phoneNo:"08012345678",
        Address:"1, Check Street, Ibadan, Nigeria",
        bank:[
            {
                bankName:"Opay Bank",
                AccountNo:2085209073
            }
        ],
        others:[
            {
                dateReg:'01-05-2023 at 11:34 pm',
                lastSeen:"Yesterday at 09:04 AM",
                AccountStatus:"Active"
            }
        ]
    },
    {
        id:27,
        name:"Anjous Tope",
        gender:"Female",
        email:"eleanorpena@domain.com",
        phoneNo:"08012345678",
        Address:"1, Check Street, Ibadan, Nigeria",
        bank:[
            {
                bankName:"Opay Bank",
                AccountNo:2085209073
            }
        ],
        others:[
            {
                dateReg:'01-05-2023 at 11:34 pm',
                lastSeen:"Yesterday at 09:04 AM",
                AccountStatus:"Active"
            }
        ]
    },
    {
        id:28,
        name:"Anjous Tope",
        gender:"Female",
        email:"eleanorpena@domain.com",
        phoneNo:"08012345678",
        Address:"1, Check Street, Ibadan, Nigeria",
        bank:[
            {
                bankName:"Opay Bank",
                AccountNo:2085209073
            }
        ],
        others:[
            {
                dateReg:'01-05-2023 at 11:34 pm',
                lastSeen:"Yesterday at 09:04 AM",
                AccountStatus:"Active"
            }
        ]
    },
    {
        id:29,
        name:"Anjous Tope",
        gender:"Female",
        email:"eleanorpena@domain.com",
        phoneNo:"08012345678",
        Address:"1, Check Street, Ibadan, Nigeria",
        bank:[
            {
                bankName:"Opay Bank",
                AccountNo:2085209073
            }
        ],
        others:[
            {
                dateReg:'01-05-2023 at 11:34 pm',
                lastSeen:"Yesterday at 09:04 AM",
                AccountStatus:"Active"
            }
        ]
    },
    {
        id:30,
        name:"Anjous Tope",
        gender:"Female",
        email:"eleanorpena@domain.com",
        phoneNo:"08012345678",
        Address:"1, Check Street, Ibadan, Nigeria",
        bank:[
            {
                bankName:"Opay Bank",
                AccountNo:2085209073
            }
        ],
        others:[
            {
                dateReg:'01-05-2023 at 11:34 pm',
                lastSeen:"Yesterday at 09:04 AM",
                AccountStatus:"Active"
            }
        ]
    },
]


export const transactions = [
    {
        id:1,
        transId:'ejsHjoErnck',
        type:'Deposit',
        user:'Cameron Williamson',
        status:'successful',
        amount:"500,000",
    },
    {
        id:2,
        transId:'ejsHjoErnck',
        type:'Deposit',
        user:'Cameron Williamson',
        status:'successful',
        amount:"500,000",
    },
    {
        id:3,
        transId:'ejsHjoErnck',
        type:'Deposit',
        user:'Cameron Williamson',
        status:'successful',
        amount:"500,000",
    },
    {
        id:4,
        transId:'ejsHjoErnck',
        type:'Deposit',
        user:'Cameron Williamson',
        status:'successful',
        amount:"500,000",
    },
    {
        id:5,
        transId:'ejsHjoErnck',
        type:'Deposit',
        user:'Cameron Williamson',
        status:'successful',
        amount:"500,000",
    },
    {
        id:6,
        transId:'ejsHjoErnck',
        type:'Deposit',
        user:'Cameron Williamson',
        status:'successful',
        amount:"500,000",
    },
    {
        id:7,
        transId:'ejsHjoErnck',
        type:'Deposit',
        user:'Cameron Williamson',
        status:'successful',
        amount:"500,000",
    },
    {
        id:8,
        transId:'ejsHjoErnck',
        type:'Deposit',
        user:'Cameron Williamson',
        status:'successful',
        amount:"500,000",
    },
    {
        id:9,
        transId:'ejsHjoErnck',
        type:'Deposit',
        user:'Cameron Williamson',
        status:'successful',
        amount:"500,000",
    },
    {
        id:10,
        transId:'ejsHjoErnck',
        type:'Deposit',
        user:'Cameron Williamson',
        status:'successful',
        amount:"500,000",
    },
    {
        id:11,
        transId:'ejsHjoErnck',
        type:'Deposit',
        user:'Cameron Williamson',
        status:'successful',
        amount:"500,000",
    },
    {
        id:12,
        transId:'ejsHjoErnck',
        type:'Deposit',
        user:'Cameron Williamson',
        status:'successful',
        amount:"500,000",
    },
    {
        id:13,
        transId:'ejsHjoErnck',
        type:'Deposit',
        user:'Cameron Williamson',
        status:'successful',
        amount:"500,000",
    },
    {
        id:14,
        transId:'ejsHjoErnck',
        type:'Deposit',
        user:'Cameron Williamson',
        status:'successful',
        amount:"500,000",
    },
    {
        id:15,
        transId:'ejsHjoErnck',
        type:'Deposit',
        user:'Cameron Williamson',
        status:'successful',
        amount:"500,000",
    },
    {
        id:16,
        transId:'ejsHjoErnck',
        type:'Deposit',
        user:'Cameron Williamson',
        status:'successful',
        amount:"500,000",
    },
    {
        id:17,
        transId:'ejsHjoErnck',
        type:'Deposit',
        user:'Cameron Williamson',
        status:'successful',
        amount:"500,000",
    },
    {
        id:18,
        transId:'ejsHjoErnck',
        type:'Deposit',
        user:'Cameron Williamson',
        status:'successful',
        amount:"500,000",
    },
    {
        id:19,
        transId:'ejsHjoErnck',
        type:'Deposit',
        user:'Cameron Williamson',
        status:'successful',
        amount:"500,000",
    },
    {
        id:20,
        transId:'ejsHjoErnck',
        type:'Deposit',
        user:'Cameron Williamson',
        status:'successful',
        amount:"500,000",
    },
    {
        id:21,
        transId:'ejsHjoErnck',
        type:'Deposit',
        user:'Cameron Williamson',
        status:'successful',
        amount:"500,000",
    },
    {
        id:22,
        transId:'ejsHjoErnck',
        type:'Deposit',
        user:'Cameron Williamson',
        status:'successful',
        amount:"500,000",
    },
    {
        id:23,
        transId:'ejsHjoErnck',
        type:'Deposit',
        user:'Cameron Williamson',
        status:'successful',
        amount:"500,000",
    },
    {
        id:24,
        transId:'ejsHjoErnck',
        type:'Deposit',
        user:'Cameron Williamson',
        status:'successful',
        amount:"500,000",
    },
    {
        id:25,
        transId:'ejsHjoErnck',
        type:'Deposit',
        user:'Cameron Williamson',
        status:'successful',
        amount:"500,000",
    },
    {
        id:26,
        transId:'ejsHjoErnck',
        type:'Deposit',
        user:'Cameron Williamson',
        status:'successful',
        amount:"500,000",
    },
    {
        id:27,
        transId:'ejsHjoErnck',
        type:'Deposit',
        user:'Cameron Williamson',
        status:'successful',
        amount:"500,000",
    },
    {
        id:28,
        transId:'ejsHjoErnck',
        type:'Deposit',
        user:'Cameron Williamson',
        status:'successful',
        amount:"500,000",
    },
    {
        id:29,
        transId:'ejsHjoErnck',
        type:'Deposit',
        user:'Cameron Williamson',
        status:'successful',
        amount:"500,000",
    },
    {
        id:30,
        transId:'ejsHjoErnck',
        type:'Deposit',
        user:'Cameron Williamson',
        status:'successful',
        amount:"500,000",
    },
    {
        id:31,
        transId:'ejsHjoErnck',
        type:'Deposit',
        user:'Cameron Williamson',
        status:'successful',
        amount:"500,000",
    },
    {
        id:32,
        transId:'ejsHjoErnck',
        type:'Deposit',
        user:'Cameron Williamson',
        status:'successful',
        amount:"500,000",
    },
    {
        id:33,
        transId:'ejsHjoErnck',
        type:'Deposit',
        user:'Cameron Williamson',
        status:'successful',
        amount:"500,000",
    },
    {
        id:34,
        transId:'ejsHjoErnck',
        type:'Deposit',
        user:'Cameron Williamson',
        status:'successful',
        amount:"500,000",
    },
    {
        id:35,
        transId:'ejsHjoErnck',
        type:'Deposit',
        user:'Cameron Williamson',
        status:'successful',
        amount:"500,000",
    },
    {
        id:36,
        transId:'ejsHjoErnck',
        type:'Deposit',
        user:'Cameron Williamson',
        status:'successful',
        amount:"500,000",
    },
    {
        id:37,
        transId:'ejsHjoErnck',
        type:'Deposit',
        user:'Cameron Williamson',
        status:'successful',
        amount:"500,000",
    },
    {
        id:38,
        transId:'ejsHjoErnck',
        type:'Deposit',
        user:'Cameron Williamson',
        status:'successful',
        amount:"500,000",
    },
    {
        id:39,
        transId:'ejsHjoErnck',
        type:'Deposit',
        user:'Cameron Williamson',
        status:'successful',
        amount:"500,000",
    },
    {
        id:40,
        transId:'ejsHjoErnck',
        type:'Deposit',
        user:'Cameron Williamson',
        status:'successful',
        amount:"500,000",
    },
    {
        id:41,
        transId:'ejsHjoErnck',
        type:'Deposit',
        user:'Cameron Williamson',
        status:'successful',
        amount:"500,000",
    },
    {
        id:42,
        transId:'ejsHjoErnck',
        type:'Deposit',
        user:'Cameron Williamson',
        status:'successful',
        amount:"500,000",
    },
    {
        id:43,
        transId:'ejsHjoErnck',
        type:'Deposit',
        user:'Cameron Williamson',
        status:'successful',
        amount:"500,000",
    },
    {
        id:44,
        transId:'ejsHjoErnck',
        type:'Deposit',
        user:'Cameron Williamson',
        status:'successful',
        amount:"500,000",
    },
    {
        id:45,
        transId:'ejsHjoErnck',
        type:'Deposit',
        user:'Cameron Williamson',
        status:'successful',
        amount:"500,000",
    },
    {
        id:46,
        transId:'ejsHjoErnck',
        type:'Deposit',
        user:'Cameron Williamson',
        status:'successful',
        amount:"500,000",
    },
    {
        id:47,
        transId:'ejsHjoErnck',
        type:'Deposit',
        user:'Cameron Williamson',
        status:'successful',
        amount:"500,000",
    },
    {
        id:48,
        transId:'ejsHjoErnck',
        type:'Deposit',
        user:'Cameron Williamson',
        status:'successful',
        amount:"500,000",
    },
    {
        id:49,
        transId:'ejsHjoErnck',
        type:'Deposit',
        user:'Cameron Williamson',
        status:'successful',
        amount:"500,000",
    },
    {
        id:50,
        transId:'ejsHjoErnck',
        type:'Deposit',
        user:'Cameron Williamson',
        status:'successful',
        amount:"500,000",
    },
    {
        id:51,
        transId:'ejsHjoErnck',
        type:'Deposit',
        user:'Cameron Williamson',
        status:'successful',
        amount:"500,000",
    },
    {
        id:52,
        transId:'ejsHjoErnck',
        type:'Deposit',
        user:'Cameron Williamson',
        status:'successful',
        amount:"500,000",
    },
    {
        id:53,
        transId:'ejsHjoErnck',
        type:'Deposit',
        user:'Cameron Williamson',
        status:'successful',
        amount:"500,000",
    },
    {
        id:54,
        transId:'ejsHjoErnck',
        type:'Deposit',
        user:'Cameron Williamson',
        status:'successful',
        amount:"500,000",
    },
    {
        id:55,
        transId:'ejsHjoErnck',
        type:'Deposit',
        user:'Cameron Williamson',
        status:'successful',
        amount:"500,000",
    },
    {
        id:56,
        transId:'ejsHjoErnck',
        type:'Deposit',
        user:'Cameron Williamson',
        status:'successful',
        amount:"500,000",
    },
    {
        id:57,
        transId:'ejsHjoErnck',
        type:'Deposit',
        user:'Cameron Williamson',
        status:'successful',
        amount:"500,000",
    },
    {
        id:58,
        transId:'ejsHjoErnck',
        type:'Deposit',
        user:'Cameron Williamson',
        status:'successful',
        amount:"500,000",
    },
    {
        id:59,
        transId:'ejsHjoErnck',
        type:'Deposit',
        user:'Cameron Williamson',
        status:'successful',
        amount:"500,000",
    },
    {
        id:60,
        transId:'ejsHjoErnck',
        type:'Deposit',
        user:'Cameron Williamson',
        status:'successful',
        amount:"500,000",
    }
]

