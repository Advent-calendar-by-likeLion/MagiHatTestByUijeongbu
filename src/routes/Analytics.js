const Analytics = () => {
    return (
        <>
            <h1>Hello Analytics Reporting API V4</h1>

            <p class="g-signin2" data-onsuccess="queryReports"></p>

            <textarea cols="80" rows="20" id="query-output"></textarea>
        </>
    );
}

export default Analytics;