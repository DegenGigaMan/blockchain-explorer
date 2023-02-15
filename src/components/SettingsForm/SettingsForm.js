import { useRef, useState } from "react";
import { setDifficulty, setRewards } from "../../services/blockchainService";
import Alert from "../UI/Alert";

const SettingsForm = () => {
  const difficultyRef = useRef();
  const rewardRef = useRef();
  const [showAlert, setShowAlert] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    setDifficulty(+difficultyRef.current.value);
    setRewards(+rewardRef.current.value);
    setShowAlert(true);
    difficultyRef.current.value = "";
    rewardRef.current.value = "";
  };

  const closeAlertHandler = () => {
    setShowAlert(false);
  };

  return (
    <>
      <div className="flex min-h-full flex-col justify-center sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          {showAlert && (
            <Alert
              link="/"
              title="Saved successfully!"
              description="The difficulty and minning reward have been updated."
              onClose={closeAlertHandler}
            />
          )}
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Settings
          </h2>
          <div className="mt-2 text-center text-sm text-gray-600">
            <p className="font-medium text-indigo-600">
              Control how the blockchain behaves when new transactions or blocks
              are created.
            </p>
          </div>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={submitHandler}>
              <div>
                <label
                  htmlFor="difficulty"
                  className="block text-sm font-medium text-gray-700"
                >
                  Difficulty
                </label>
                <div className="mt-1">
                  <input
                    id="difficulty"
                    name="difficulty"
                    type="number"
                    required
                    ref={difficultyRef}
                    aria-describedby="difficulty-description"
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <p
                  className="mt-2 text-sm text-gray-500"
                  id="difficulty-description"
                >
                  Difficulty controls how long the mining process takes. Higher
                  numbers will make mining a lot slower! Default: 2
                </p>
              </div>

              <div>
                <label
                  htmlFor="reward"
                  className="block text-sm font-medium text-gray-700"
                >
                  Mining reward
                </label>
                <div className="mt-1">
                  <input
                    id="reward"
                    name="reward"
                    type="number"
                    required
                    ref={rewardRef}
                    aria-describedby="reward-description"
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <p
                  className="mt-2 text-sm text-gray-500"
                  id="reward-description"
                >
                  How much "coins" a miner receives for successfully creating a
                  new block for the chain. Default: 100
                </p>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsForm;
