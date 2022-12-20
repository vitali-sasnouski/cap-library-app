namespace masterdata;

entity Statuses {
    key ID: String;
        name: String(20);
        criticality: Integer;
}

entity BookStatuses {
    key ID: String;
        name: String(20);
        criticality: Integer;
}