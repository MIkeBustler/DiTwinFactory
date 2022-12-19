#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["DiTwinFactory.API.WebHost/DiTwinFactory.API.WebHost.csproj", "DiTwinFactory.API.WebHost/"]
RUN dotnet restore "DiTwinFactory.API.WebHost/DiTwinFactory.API.WebHost.csproj"
COPY . .
WORKDIR "/src/DiTwinFactory.API.WebHost"
RUN dotnet build "DiTwinFactory.API.WebHost.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "DiTwinFactory.API.WebHost.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "DiTwinFactory.API.WebHost.dll"]