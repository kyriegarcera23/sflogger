import React, {useState} from 'react';
import 'tailwindcss/tailwind.css';

const PaymentForm = () => {
    const [showModal, setShowModal] = useState(false);

    const [formData, setFormData] = useState({
        AccountNumber: '',
        DateOfChange: '',
        LoanContractDate: '',
        LoanBalance: '',
        LoanAmount: '',
        TotalLoanAmount: '',
        Points: '',
        LoanProduct: '',
        Status: '',
        Amount: '',
        InterestRate: '',
        PaymentScheduleStartDate1: '',
        PaymentScheduleEndDate1: '',
        PaymentScheduleStartDate2: '',
        PaymentScheduleEndDate2: '',
        PaymentScheduleStartDate3: '',
        PaymentScheduleEndDate3: '',
        PaymentScheduleStartDate4: '',
        PaymentScheduleEndDate4: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log('Form data:', formData);
        setShowModal(true);
    };

    const SendApi = ()=> {
        fetch('http://localhost:8000/api/payments/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Response from server:', data);
            // Handle response from server if needed
        })
        .catch(error => {
            console.error('Error sending data to server:', error);
        });
    }



    return (
    <form onSubmit={handleSubmit} class="flex justify-center items-center h-screen" >
        <div class="rounded-lg shadow-md bg-white">

            
            {/* card header */}
            <div class="px-6 py-4 bg-gray-100 border-b border-gray-200">
                <h2 class="text-lg font-semibold text-gray-800">Payment Form</h2>
            </div>
            {/* start body */}

            <div class="p-6">
                <div class="grid grid-cols-4 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700" htmlFor="AccountNumber">
                            Account Number:
                        </label>
                    </div>
                    <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="AccountNumber"
                            type="number"
                            placeholder="Enter Account Number"
                            name="AccountNumber"
                            value={formData.AccountNumber}
                            onChange={handleChange}
                    />

                    <div>
                        <label className="block text-sm font-medium text-gray-700" htmlFor="dateOfChange">
                            Date of Change:
                        </label> 
                    </div>
                        <input 
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="dateOfChange"
                        type="date"
                        name="DateOfChange"
                        value={formData.DateOfChange}
                        onChange={handleChange}
                        />

                    <div>
                        <label className="block text-sm font-medium text-gray-700" htmlFor="LoanBalance">
                            Loan Balance:
                        </label>
                    </div>
                    <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="LoanBalance"
                            type="number"
                            placeholder="Enter Loan Balance"
                            name="LoanBalance"
                            value={formData.LoanBalance}
                            onChange={handleChange}
                    />

                    <div>
                        <label className="block text-sm font-medium text-gray-700" htmlFor="LoanContractDate">
                            Loan Contract Date:
                        </label> 
                    </div>
                        <input 
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="LoanContractDate"
                        type="date"
                        name="LoanContractDate"
                        value={formData.LoanContractDate}
                        onChange={handleChange}
                        />

                    <div>
                        <label className="block text-sm font-medium text-gray-700" htmlFor="LoanAmount">
                            Loan Amount:
                        </label>
                    </div>
                    <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="LoanAmount"
                            type="number"
                            placeholder="Enter Loan Amount"
                            name="LoanAmount"
                            value={formData.LoanAmount}
                            onChange={handleChange}
                    />


                    <div >
                        <label className="block text-sm font-medium text-gray-700" htmlFor="TotalLoanAmount">
                        Total Loan Amount:
                        </label>
                    </div>
                    <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="TotalLoanAmount"
                            type="number"
                            placeholder="Enter Total Loan Amount"
                            name="TotalLoanAmount"
                            value={formData.TotalLoanAmount}
                            onChange={handleChange}
                    />


                    <div>
                        <label className="block text-sm font-medium text-gray-700" htmlFor="Points">
                        Points:
                        </label>
                    </div>
                    <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="Points"
                            type="number"
                            placeholder="Enter Points"
                            name="Points"
                            value={formData.Points}
                            onChange={handleChange}
                    />

                    <div>
                        <label className="block text-sm font-medium text-gray-700" htmlFor="InterestRate">
                        Interest Rate:
                        </label>
                    </div>
                    <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="InterestRate"
                            type="number"
                            placeholder="Enter Interest Rate"
                            name="InterestRate"
                            value={formData.InterestRate}
                            onChange={handleChange}
                    />

                    

                    <div>
                        <label className="block text-sm font-medium text-gray-700" htmlFor="Status">
                        Status:
                        </label>
                    </div>
                    <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="Status"
                            type="text"
                            placeholder="Enter Status"
                            name="Status"
                            value={formData.Status}
                            onChange={handleChange}
                    />

                    <div>
                        <label className="block text-sm font-medium text-gray-700" htmlFor="Amount">
                        Amount :
                        </label>
                    </div>
                    <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="Amount"
                            type="number"
                            placeholder="Enter Amount"
                            name="Amount"
                            value={formData.Amount}
                            onChange={handleChange}
                    />

                    <div>
                        <label className="block text-sm font-medium text-gray-700" htmlFor="LoanProduct">
                        Loan Product:
                        </label>
                    </div>
                    <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="LoanProduct"
                            type="text"
                            placeholder="Enter Loan Product"
                            name="LoanProduct"
                            value={formData.LoanProduct}
                            onChange={handleChange}
                    />


                    

                </div>
                <hr class="my-6 border-gray-200"/>

                    <div class="grid grid-cols-4 gap-4">

                        <div>
                        
                            <label className="block text-sm font-medium text-gray-700" htmlFor="PaymentScheduleStartDate1">
                                Payment Schedule Start Date 1:
                            </label> 
                        </div>

                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="PaymentScheduleStartDate1"
                            type="text"
                            placeholder="yyyy-mm-dd"
                            name="PaymentScheduleStartDate1"
                            value={formData.PaymentScheduleStartDate1}
                            onChange={handleChange}
                        />


                    <div>
                    
                    <label className="block text-sm font-medium text-gray-700" htmlFor="PaymentScheduleEndDate1">
                    Payment Schedule End Date 1:
                    </label> 
                    </div>

                    <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="PaymentScheduleEndDate1"
                            type="text"
                            placeholder="yyyy-mm-dd"
                            name="PaymentScheduleEndDate1"
                            value={formData.PaymentScheduleEndDate1}
                            onChange={handleChange}
                    />


                    <div>
                        <label className="block text-sm font-medium text-gray-700" htmlFor="PaymentScheduleStartDate1">
                            Payment Schedule Start Date 2:
                        </label> 
                    </div>


                    <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="PaymentScheduleStartDate2"
                            type="text"
                            placeholder="yyyy-mm-dd"
                            name="PaymentScheduleStartDate2"
                            value={formData.PaymentScheduleStartDate2}
                            onChange={handleChange}
                    />


                    <div>
                        
                        <label className="block text-sm font-medium text-gray-700" htmlFor="PaymentScheduleStartDate1">
                            Payment Schedule End Date 2:
                        </label> 
                    </div>
                    <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="PaymentScheduleEndDate2"
                            type="text"
                            placeholder="yyyy-mm-dd"
                            name="PaymentScheduleEndDate2"
                            value={formData.PaymentScheduleEndDate2}
                            onChange={handleChange}
                    />

                    <div>
                        
                        <label className="block text-sm font-medium text-gray-700" htmlFor="PaymentScheduleStartDate1">
                            Payment Schedule Start Date 3:
                        </label> 
                    </div>


                    <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="PaymentScheduleStartDate3"
                            type="text"
                            placeholder="yyyy-mm-dd"
                            name="PaymentScheduleStartDate3"
                            value={formData.PaymentScheduleStartDate3}
                            onChange={handleChange}
                    />

                    <div>
                        
                        <label className="block text-sm font-medium text-gray-700" htmlFor="PaymentScheduleStartDate1">
                            Payment Schedule End Date 3:
                        </label> 
                    </div>

                    <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="PaymentScheduleEndDate3"
                            type="text"
                            placeholder="yyyy-mm-dd"
                            name="PaymentScheduleEndDate3"
                            value={formData.PaymentScheduleEndDate3}
                            onChange={handleChange}
                    />

                    <div>
                        
                        <label className="block text-sm font-medium text-gray-700" htmlFor="PaymentScheduleStartDate1">
                            Payment Schedule Start Date 4:
                        </label> 
                    </div>
                    <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="PaymentScheduleStartDate4"
                            type="text"
                            placeholder="yyyy-mm-dd"
                            name="PaymentScheduleStartDate4"
                            value={formData.PaymentScheduleStartDate4}
                            onChange={handleChange}
                    />

                    <div>
                        
                        <label className="block text-sm font-medium text-gray-700" htmlFor="PaymentScheduleStartDate1">
                            Payment Schedule End Date 4:
                        </label> 
                    </div>
       
                    <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="PaymentScheduleEndDate4"
                            type="text"
                            placeholder="yyyy-mm-dd"
                            name="PaymentScheduleEndDate4"
                            value={formData.PaymentScheduleEndDate4}
                            onChange={handleChange}
                    />
         

                </div>

                {/* footer */}
                <div class="px-6 py-4  flex justify-end">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                    >
                        Submit
                    </button>
                </div>

            </div>
        
        </div>

        {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center">
                <div className="fixed inset-0 bg-black opacity-50"></div>
                <div className="bg-white p-6 rounded-lg shadow-lg z-10">
                    <p className="text-xl font-bold mb-4">Save Record</p>
                    <p>Do you want to save this record?</p>
                    <hr class="my-6 border-gray-200"/>
                    <div className="mt-4 flex justify-end">
                    <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-4"
                        onClick={() => setShowModal(false)}
                    >
                        Cancel
                    </button>
                    <button
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => {
                        SendApi()
                        setShowModal(false);
                        }}
                    >
                        Save
                    </button>
                    </div>
                </div>
                </div>
            )}

            
               
           
    </form>
    );
};




export default PaymentForm;