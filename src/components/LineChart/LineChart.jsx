import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';


const LineChart = () => {

    const subjectMarksData = [
        { "id": 1, "name": "Alice", "math": 85, "physics": 78, "chemistry": 92 },
        { "id": 2, "name": "Bob", "math": 78, "physics": 82, "chemistry": 89 },
        { "id": 3, "name": "Charlie", "math": 92, "physics": 88, "chemistry": 94 },
        { "id": 4, "name": "David", "math": 88, "physics": 76, "chemistry": 85 },
        { "id": 5, "name": "Ella", "math": 76, "physics": 90, "chemistry": 78 },
        { "id": 6, "name": "Fiona", "math": 90, "physics": 94, "chemistry": 92 },
        { "id": 7, "name": "George", "math": 79, "physics": 85, "chemistry": 80 },
        { "id": 8, "name": "Hannah", "math": 94, "physics": 91, "chemistry": 88 },
        { "id": 9, "name": "Ivy", "math": 87, "physics": 79, "chemistry": 76 },
        { "id": 10, "name": "Jack", "math": 81, "physics": 84, "chemistry": 90 }
    ];

    return (
        <div>
            <LChart width={800} height={400} data={subjectMarksData}>
                <XAxis dataKey={'name'} />
                <YAxis></YAxis>
                <Line dataKey="math"></Line>
                <Line dataKey="physics" stroke='Red' ></Line>
                <Line dataKey="chemistry" stroke='yellow'></Line>
            </LChart>
        </div>
    );
};

LineChart.propTypes = {

};

export default LineChart;