/*
 * <<
 * wormhole
 * ==R
 * Copyright (C) 2016 - 2017 EDP
 * ==
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
 * >>
 */

import config, { env } from '../globalConfig'

const host = config[env].host

export default {
  login: `${host}/login`,
  changepwd: `${host}/changepwd`,
  projectList: `${host}/admin/projects`,
  projectUserList: `${host}/user/projects`,

  instance: `${host}/admin/instances`,
  database: `${host}/admin/databases`,
  user: `${host}/admin/users`,
  namespace: `${host}/admin/namespaces`,
  flow: `${host}/admin/flows`,
  stream: `${host}/admin/streams`,
  riderInfo: `${host}/admin/riderInfo`,

  projectAdminStream: `${host}/admin/projects`,
  projectStream: `${host}/user/projects`
}
