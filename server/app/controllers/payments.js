const request = require('request')
exports.paymentCreate = async(req,res)=>{
    try {
        console.log(req.body)
        const {
            AccountNumber, 
            DateOfChange,
            LoanContractDate,
            LoanBalance,
            LoanAmount,
            TotalLoanAmount,
            Points,
            LoanProduct,
            Status,
            Amount,
            InterestRate,
            PaymentScheduleStartDate1,
            PaymentScheduleEndDate1,
            PaymentScheduleStartDate2,
            PaymentScheduleEndDate2,
            PaymentScheduleStartDate3,
            PaymentScheduleEndDate3,
            PaymentScheduleStartDate4,
            PaymentScheduleEndDate4,
        } = req.body

        const mysql = require('mysql');


        const pool = mysql.createPool({
            connectionLimit: 10,
            host: 'stratus-db-reporting.cszd17ujdumz.us-east-1.rds.amazonaws.com',
            user: 'admin',
            password: 'CtPMicUiM5CchYE3CpLN',
            database: 'analytics_db'
        });

        const dataToInsert = {
            AccountNumber: AccountNumber,
            DateOfChange: DateOfChange,
            LoanContractDate: DateOfChange,
            LoanContractDate: LoanContractDate,
            LoanBalance:LoanBalance,
            LoanAmount:LoanAmount,
            TotalLoanAmount:TotalLoanAmount,
            Points:Points,
            LoanProduct:LoanProduct,
            Status:Status,
            Amount:Amount,
            InterestRate:InterestRate,
            PaymentScheduleStartDate1:PaymentScheduleStartDate1,
            PaymentScheduleEndDate1:PaymentScheduleEndDate1,
            PaymentScheduleStartDate2:PaymentScheduleStartDate2,
            PaymentScheduleEndDate2:PaymentScheduleEndDate2,
            PaymentScheduleStartDate3:PaymentScheduleStartDate3,
            PaymentScheduleEndDate3:PaymentScheduleEndDate3,
            PaymentScheduleStartDate4:PaymentScheduleStartDate4,
            PaymentScheduleEndDate4:PaymentScheduleEndDate4

        };
        
        pool.query('INSERT INTO test_Payments SET ?', dataToInsert, (error, results, fields) => {
            if (error) {
                console.error('Error inserting data:', error);
                return;
            }
            console.log('Data inserted successfully');
        });

        
        
        res.send('test');

    } catch (err) {
        console.log(`error paymentCreate : ${err}`)

    }

}