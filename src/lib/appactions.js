import AppDispatcher from './appdispatcher';

class AppActions {

    submitJournal(data) {
        AppDispatcher.dispatch({
            actionType: 'SUBMIT_JOURNAL',
            value: data
        });

        AppDispatcher.dispatch({
            actionType: 'APPROVE_JOURNAL',
            value: data
        });
    }

    displayJournal(data) {
        AppDispatcher.dispatch({
            actionType: 'VIEW_JOURNAL',
            value: data
        });
    }

    removeJournal(key)
    {
         AppDispatcher.dispatch({
            actionType: 'REMOVE_JOURNAL',
            value: key
        });
    }
}



export default new AppActions()