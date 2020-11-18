declare const _default: {
    Schedule: {
        version: string;
        put_code_per_byte_cost: string;
        grow_mem_cost: string;
        regular_op_cost: string;
        return_data_per_byte_cost: string;
        event_data_per_byte_cost: string;
        event_per_topic_cost: string;
        event_base_cost: string;
        call_base_cost: string;
        instantiate_base_cost: string;
        dispatch_base_cost: string;
        sandbox_data_read_cost: string;
        sandbox_data_write_cost: string;
        transfer_cost: string;
        instantiate_cost: string;
        max_event_topics: string;
        max_stack_height: string;
        max_memory_pages: string;
        max_table_size: string;
        enable_println: string;
        max_subject_len: string;
    };
    CollectionMode: {
        _enum: {
            Invalid: any;
            NFT: string;
            Fungible: string;
            ReFungible: string;
        };
    };
    NftItemType: {
        Collection: string;
        Owner: string;
        Data: string;
    };
    Ownership: {
        owner: string;
        fraction: string;
    };
    ReFungibleItemType: {
        Collection: string;
        Owner: string;
        Data: string;
    };
    CollectionType: {
        Owner: string;
        Mode: string;
        Access: string;
        DecimalPoints: string;
        Name: string;
        Description: string;
        TokenPrefix: string;
        CustomDataSize: string;
        OffchainSchema: string;
        Sponsor: string;
        UnconfirmedSponsor: string;
    };
    RawData: string;
    Address: string;
    LookupSource: string;
    Weight: string;
};
export default _default;
