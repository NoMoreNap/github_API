export interface ItemsResponse {
    avatar_url: string
    events_url: string
    followers_url: string
    following_url: string
    gists_url: string
    gravatar_id: string
    html_url: string
    id: number
    login: string
    node_id: string
    organizations_url: string
    received_events_url: string
    repos_url: string
    score: number
    site_admin: boolean
    starred_url: string
    subscriptions_url: string
    type: string
    url: string
}
export interface profile {
    avatar_url: string
    bio: string
    blog: string
    company: null
    created_at: string
    email: null
    events_url: string
    followers: number
    followers_url: string
    following: number
    following_url: string
    gists_url: string
    gravatar_id: string
    hireable: null
    html_url: string
    id: number
    location: null
    login: string
    name: string
    node_id: string
    organizations_url: string
    public_gists: number
    public_repos: number
    received_events_url: string
    repos_url: string
    site_admin: false
    starred_url: string
    subscriptions_url: string
    twitter_username: null
    type: string
    updated_at: string
    url: string
}

export interface APIResponse {
    total_count: number
    incomplete_results: boolean
    items: ItemsResponse[]
}

export interface baseQueryResponse {
    data: APIResponse
    isLoading: boolean
}
export interface baseQueryResponseProf {
    data: profile
    isLoading: boolean
}
