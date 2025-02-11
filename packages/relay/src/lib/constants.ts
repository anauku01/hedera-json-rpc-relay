/*-
  *
  * Hedera JSON RPC Relay
  *
  * Copyright (C) 2022 Hedera Hashgraph, LLC
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *      http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *
  */

enum CACHE_KEY {
    GAS_PRICE = 'gas_price',
    FEE_HISTORY = 'fee_history'
}
enum CACHE_TTL {
    ONE_HOUR = 3_600_000
}

enum ORDER {
    ASC = 'asc',
    DESC = 'desc'
}

export default {
    TINYBAR_TO_WEIBAR_COEF: 10_000_000_000,
    CACHE_KEY,
    CACHE_TTL,

    DEFAULT_TINY_BAR_GAS: 72, // (853454 / 1000) * (1 / 12)
    ETH_FUNCTIONALITY_CODE: 84,
    ETH_GET_LOGS_BLOCK_RANGE_LIMIT: Number(process.env.ETH_GET_LOGS_BLOCK_RANGE_LIMIT || 500),
    EXCHANGE_RATE_FILE_ID: "0.0.112",
    FEE_SCHEDULE_FILE_ID: '0.0.111',

    TYPE_CONTRACT: 'contract',
    TYPE_ACCOUNT: 'account',

    FEE_HISTORY_MAX_RESULTS: Number(process.env.FEE_HISTORY_MAX_RESULTS || 10),
    ORDER,

    BLOCK_GAS_LIMIT: 15_000_000,
    ISTANBUL_TX_DATA_NON_ZERO_COST: 16,
    TX_BASE_COST: 21_000,
    TX_DEFAULT_GAS: 400_000,
    TX_CREATE_EXTRA: 32_000,
    TX_DATA_ZERO_COST: 4,
    REQUEST_ID_STRING: `Request ID: `
};
