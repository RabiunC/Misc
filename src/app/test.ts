type User = {
    name: string;
    id: number;
}

type PartialUser = Partial<User>;

const user: PartialUser = {};