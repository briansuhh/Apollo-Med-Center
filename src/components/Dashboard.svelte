<script>
    import Topbar from "./Topbar.svelte";
    
</script>

<main class="main-content">
    
    <Topbar />

    <section class="dashboard">
      <h1>Dashboard</h1>
      <div class="progress-tracker">
        <div class="step completed">
          <span>100%</span>
          <p>Profile Completion</p>
        </div>
        <div class="step completed">
          <span>100%</span>
          <p>Application Completion</p>
        </div>
        <div class="step completed">
          <span>100%</span>
          <p>Application Confirmation</p>
        </div>
        <div class="step">
          <span>0%</span>
          <p>Interview Schedule</p>
        </div>
        <div class="step">
          <span>0%</span>
          <p>Interview Result</p>
        </div>
      </div>
      <p>Your application is currently being reviewed by our HR team. This process typically takes 1-2 weeks.</p>
      <div class="interview-schedule">
        <h2>Interview Schedule</h2>
        <table>
          <tr>
            <th>Date</th>
            <th>8:00</th>
            <th>9:00</th>
            <th>10:00</th>
            <th>11:00</th>
            <th>12:00</th>
            <th>13:00</th>
          </tr>
          <tr>
            <td>Mon</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Tue</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Wed</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Thu</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </div>
    </section>
    <aside class="notifications">
      <h2>Notifications</h2>
      <div class="notification"></div>
      <div class="notification"></div>
      <div class="notification"></div>
    </aside>
  </main>

<style>

  .main-content {
    width: 80%;
  }

  .main-content .dashboard {
    margin-top: 20px;
    padding-left: 30px;
  }

  .main-content h1 {
    font-size: 24px;
    margin-bottom: 20px;
    font-family: "Poppins", sans-serif;
    font-weight: 800;
    font-style: normal;
  }

  .main-content h2 {
    font-size: 20px;
    margin-bottom: 20px;
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-style: normal;
  }

  .main-content p {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-style: normal;
  }

  .progress-tracker {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 20px;
  }

  .progress-tracker .step {
    text-align: center;
    flex: 1;
  }

  .progress-tracker .step span {
    display: block;
    font-size: 20px;
    margin-bottom: 5px;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-style: normal;
  }

  .progress-tracker .step p {
    font-size: 14px;
  }

  .progress-tracker .step.completed span {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-style: normal;
    color: #314fa8;
  }

  .interview-schedule {
    margin-top: 20px;
  }

  .interview-schedule h2 {
    font-size: 20px;
    margin-bottom: 10px;
  }

  .interview-schedule table {
    width: 100%;
    border-collapse: collapse;
  }

  .interview-schedule th {
    border: 1px solid #ccc;
    padding: 10px;
    text-align: center;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-style: normal;
  }

  .interview-schedule td {
    border: 1px solid #ccc;
    padding: 10px;
    text-align: center;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-style: normal;
  }

  .notifications {
    margin-top: 20px;
    padding-left: 30px;
  }

  .notifications h2 {
    font-size: 20px;
    margin-bottom: 10px;
  }

  .notifications .notification {
    background-color: #fff;
    padding: 15px;
    margin-bottom: 10px;
    border-radius: 5px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }

</style>