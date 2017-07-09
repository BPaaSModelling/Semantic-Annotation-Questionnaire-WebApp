/**
 * Created by Stefano on 09/07/2017.
 */
export class VariableSettings {

    private static SINGLESELECTION       : string = 'http://ikm-group.ch/archiMEO/questionnaire#SingleSelection';
    private static SEARCHSELECTION      : string = 'http://ikm-group.ch/archiMEO/questionnaire#SearchSelection';
    private static VALUEINSERT          : string = 'http://ikm-group.ch/archiMEO/questionnaire#ValueInsert';
    private static MULTISELECTION       : string = 'http://ikm-group.ch/archiMEO/questionnaire#MultiSelection'

    private static NUMERIC_DATATYPE              : string = 'http://www.w3.org/2001/XMLSchema#integer'

    public  getSingleSelectionURI() : string {
        return VariableSettings.SINGLESELECTION;
    }

    public getSearchURI() : string {
        return VariableSettings.SEARCHSELECTION;
    }

    public  getValueInsertURI() : string {
        return VariableSettings.VALUEINSERT;
    }

    public  getMultiSelectionURI() : string {
        return VariableSettings.MULTISELECTION;
    }

    public  getNumericDatatypeURI() : string {
        return VariableSettings.NUMERIC_DATATYPE;
    }
}
