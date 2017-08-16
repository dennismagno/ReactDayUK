import AppDispatcher from './appdispatcher.js';
import { EventEmitter } from 'events';

var jsonData = require('../data/journals.json');
let _journals = jsonData.d.results;
let viewjoural = null;

class AppStore extends EventEmitter {

    constructor() {
        super();
        this.dispatchToken = AppDispatcher.register(this.dispatcherCallback.bind(this))
    }

    emitChange(eventName) {
        this.emit(eventName);
    }

    getAll() {
        return _journals;
    }

    getView() {
        return viewjoural;
    }

    submitJournal(journal) {
        _journals.push(journal);
    }

    displayJournal(code) {
        _journals.find((el) => {
            if (el.Code === code) {
                viewjoural = el;
            }
        })
    }

    removeJournal(key) {
        _journals.splice(key, 1);
    }

    addChangeListener(eventName, callback) {
        this.on(eventName, callback);
    }

    removeChangeListener(eventName, callback) {
        this.removeListener(eventName, callback);
    }

    dispatcherCallback(action) {
        switch (action.actionType) {
            case 'SUBMIT_JOURNAL':
                this.submitJournal(action.value);
                break;
            case 'VIEW_JOURNAL':
                this.displayJournal(action.value);
                break;
            case 'REMOVE_JOURNAL':
                this.removeJournal(action.value);
        }

        this.emitChange('STORE_' + action.actionType);

        return true;
    }
}

export default new AppStore();