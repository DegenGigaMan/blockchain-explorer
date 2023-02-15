import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addTransaction } from "../../services/blockchainService";
import BlockContext from "../../store/block-context";
import Alert from "../UI/Alert";

const NewTransaction = () => {
  const toRef = useRef();
  const amountRef = useRef();
  const [showAlert, setShowAlert] = useState(false);
  const blockContext = useContext(BlockContext);
  const navigate = useNavigate();
  const submitHandler = (event) => {
    event.preventDefault();
    const added = addTransaction(toRef.current.value, amountRef.current.value);
    if (added) {
      setShowAlert(true);
    }

    toRef.current.value = "";
    amountRef.current.value = "";
    blockContext.onShowPending();
    blockContext.loadPending();
    navigate('pending');
  };

  const closeAlertHandler = () => {
    setShowAlert(false);
  }

  return (
    <>
      <div className="flex min-h-full flex-col justify-center sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          {showAlert && (
            <Alert
              title="Created and signed successfully!"
              description="Transaction was added to the pending list to be mined on the next block."
              onClose={closeAlertHandler}
              link='pending'
            />
          )}
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Create transaction
          </h2>
          <div className="mt-2 text-center text-sm text-gray-600">
            <p className="font-medium text-indigo-600">Try it out!</p>
          </div>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={submitHandler}>
              <div>
                <label
                  htmlFor="to"
                  className="block text-sm font-medium text-gray-700"
                >
                  To address
                </label>
                <div className="mt-1">
                  <input
                    id="to"
                    name="to"
                    type="text"
                    ref={toRef}
                    required
                    aria-describedby="to-description"
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <p className="mt-2 text-sm text-gray-500" id="to-description">
                  The address of the wallet where you want to send the money to.
                  You can type random text here.
                </p>
              </div>

              <div>
                <label
                  htmlFor="amount"
                  className="block text-sm font-medium text-gray-700"
                >
                  Amount
                </label>
                <div className="mt-1">
                  <input
                    id="amount"
                    name="amount"
                    type="number"
                    ref={amountRef}
                    required
                    aria-describedby="amount-description"
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <p
                  className="mt-2 text-sm text-gray-500"
                  id="amount-description"
                >
                  You can transfer any amount. Account balance is not checked in
                  this demo. Have at it!
                </p>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Create & Sign transaction
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewTransaction;
