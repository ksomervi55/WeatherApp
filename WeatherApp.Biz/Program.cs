var builder = GenericHostBuilderExtensions.Creat(args);
builder.AddScoped
var app = builder.Build();
app.Con
app.MapGet("/", () => "Hello World!");

app.Run();
