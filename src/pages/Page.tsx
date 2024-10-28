type PageProps = {
    title: string;
};

export default function Page({ title }: PageProps) {
    return <h1>{title}</h1>;
}
