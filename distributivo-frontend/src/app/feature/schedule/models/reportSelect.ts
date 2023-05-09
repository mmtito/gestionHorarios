/*type ReportSelect = {
    currentEntity : string
    id : string
    end : null | Date
    start : null | Date
}
*/
interface ReportSelect {
    currentEntity : string
    id : string
    end : string
    start : string
}


export { ReportSelect };